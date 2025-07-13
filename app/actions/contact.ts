"use server"

import { z } from "zod"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

// Simple contact form schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    // Extract form data
    const rawFormData = {
      name: formData.get("name") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedFields = contactSchema.safeParse(rawFormData)

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Please fix the errors below.",
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, message } = validatedFields.data

    // Save message to file
    await saveMessage({ name, message })

    // Send notifications to your phone (multiple methods)
    await sendPhoneNotifications({ name, message })

    // Log the submission
    console.log("📧 NEW CONTACT MESSAGE:")
    console.log("👤 Name:", name)
    console.log("💬 Message:", message)
    console.log("⏰ Time:", new Date().toLocaleString())
    console.log("=".repeat(50))

    return {
      success: true,
      message: `Thank you ${name}! Your message has been received. I'll get back to you soon!`,
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again.",
    }
  }
}

// Save message to a JSON file
async function saveMessage({ name, message }: { name: string; message: string }) {
  try {
    const messagesDir = path.join(process.cwd(), "messages")
    const messagesFile = path.join(messagesDir, "contacts.json")

    // Create messages directory if it doesn't exist
    if (!existsSync(messagesDir)) {
      await mkdir(messagesDir, { recursive: true })
    }

    // Read existing messages or create empty array
    let messages = []
    if (existsSync(messagesFile)) {
      const fileContent = await readFile(messagesFile, "utf-8")
      messages = JSON.parse(fileContent)
    }

    // Add new message
    const newMessage = {
      id: Date.now(),
      name,
      message,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleString(),
    }

    messages.unshift(newMessage) // Add to beginning of array

    // Keep only last 100 messages
    if (messages.length > 100) {
      messages = messages.slice(0, 100)
    }

    // Save back to file
    await writeFile(messagesFile, JSON.stringify(messages, null, 2))

    console.log(`💾 Message saved to: ${messagesFile}`)
  } catch (error) {
    console.error("Error saving message:", error)
    throw error
  }
}

// Send notifications to your phone
async function sendPhoneNotifications({ name, message }: { name: string; message: string }) {
  const messageText = `🔔 New Portfolio Message!\n\n👤 From: ${name}\n💬 Message: ${message.substring(0, 100)}${
    message.length > 100 ? "..." : ""
  }\n\n⏰ ${new Date().toLocaleString()}`

  // Method 1: Telegram Bot (EASIEST - Recommended)
  await sendTelegramMessage(messageText)

  // Method 2: Discord Webhook (Also Easy)
  // await sendDiscordMessage(name, message)

  // Method 3: WhatsApp Business API (If you have business account)
  // await sendWhatsAppMessage(messageText)

  // Method 4: SMS via Twilio (Paid service)
  // await sendSMSMessage(messageText)
}

// Method 1: Telegram Bot (FREE & INSTANT)
async function sendTelegramMessage(text: string) {
  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.log("⚠️ Telegram not configured. Add TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID to environment variables.")
      return
    }

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }),
    })

    if (response.ok) {
      console.log("✅ Telegram message sent successfully!")
    } else {
      console.log("❌ Failed to send Telegram message")
    }
  } catch (error) {
    console.error("Telegram error:", error)
  }
}

// Method 2: Discord Webhook (FREE & INSTANT)
async function sendDiscordMessage(name: string, message: string) {
  try {
    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL

    if (!DISCORD_WEBHOOK_URL) {
      console.log("⚠️ Discord not configured. Add DISCORD_WEBHOOK_URL to environment variables.")
      return
    }

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: "🔔 New Portfolio Contact Message!",
            color: 0x3b82f6, // Blue color
            fields: [
              {
                name: "👤 From",
                value: name,
                inline: true,
              },
              {
                name: "⏰ Time",
                value: new Date().toLocaleString(),
                inline: true,
              },
              {
                name: "💬 Message",
                value: message.length > 1000 ? message.substring(0, 1000) + "..." : message,
                inline: false,
              },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    })

    if (response.ok) {
      console.log("✅ Discord message sent successfully!")
    } else {
      console.log("❌ Failed to send Discord message")
    }
  } catch (error) {
    console.error("Discord error:", error)
  }
}

// Method 3: SMS via Twilio (PAID - but very reliable)
async function sendSMSMessage(text: string) {
  try {
    const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
    const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
    const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER
    const YOUR_PHONE_NUMBER = process.env.YOUR_PHONE_NUMBER

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE_NUMBER || !YOUR_PHONE_NUMBER) {
      console.log("⚠️ Twilio not configured. Add Twilio credentials to environment variables.")
      return
    }

    // You would need to install twilio package: npm install twilio
    // const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
    // await twilio.messages.create({
    //   body: text,
    //   from: TWILIO_PHONE_NUMBER,
    //   to: YOUR_PHONE_NUMBER
    // })

    console.log("📱 SMS would be sent via Twilio")
  } catch (error) {
    console.error("SMS error:", error)
  }
}
