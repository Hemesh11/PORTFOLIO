"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, Smartphone, MessageCircle, Hash } from "lucide-react"

export function NotificationSetup() {
  const [copiedText, setCopiedText] = useState("")

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(""), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">📱 Get Messages on Your Phone</h1>
        <p className="text-white/70">Choose your preferred method to receive instant notifications</p>
      </div>

      {/* Method 1: Telegram (Recommended) */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <MessageCircle className="w-8 h-8 text-blue-400 mr-3" />
            <div>
              <h3 className="text-xl font-bold text-white">Telegram Bot (Recommended)</h3>
              <p className="text-green-400 text-sm">✅ FREE • ✅ INSTANT • ✅ RELIABLE</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Step 1: Create a Telegram Bot</h4>
              <ol className="text-white/80 text-sm space-y-1 list-decimal list-inside">
                <li>Open Telegram and search for "@BotFather"</li>
                <li>Send "/newbot" command</li>
                <li>Choose a name for your bot (e.g., "Hemesh Portfolio Bot")</li>
                <li>Choose a username (e.g., "hemesh_portfolio_bot")</li>
                <li>Copy the bot token you receive</li>
              </ol>
            </div>

            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Step 2: Get Your Chat ID</h4>
              <ol className="text-white/80 text-sm space-y-1 list-decimal list-inside">
                <li>Send a message to your bot</li>
                <li>
                  Visit:{" "}
                  <code className="bg-white/10 px-2 py-1 rounded text-blue-300">
                    https://api.telegram.org/bot[YOUR_BOT_TOKEN]/getUpdates
                  </code>
                </li>
                <li>Find your chat ID in the response</li>
              </ol>
            </div>

            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Step 3: Add Environment Variables</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <code className="bg-white/10 px-3 py-2 rounded text-blue-300 flex-1">
                    TELEGRAM_BOT_TOKEN=your_bot_token_here
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard("TELEGRAM_BOT_TOKEN=", "telegram_token")}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    {copiedText === "telegram_token" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <code className="bg-white/10 px-3 py-2 rounded text-blue-300 flex-1">
                    TELEGRAM_CHAT_ID=your_chat_id_here
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard("TELEGRAM_CHAT_ID=", "telegram_chat")}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    {copiedText === "telegram_chat" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Method 2: Discord */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Hash className="w-8 h-8 text-purple-400 mr-3" />
            <div>
              <h3 className="text-xl font-bold text-white">Discord Webhook</h3>
              <p className="text-green-400 text-sm">✅ FREE • ✅ INSTANT • ✅ EASY SETUP</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Setup Steps:</h4>
              <ol className="text-white/80 text-sm space-y-1 list-decimal list-inside">
                <li>Create a Discord server (or use existing)</li>
                <li>Go to Server Settings → Integrations → Webhooks</li>
                <li>Click "New Webhook"</li>
                <li>Choose a channel and copy the webhook URL</li>
              </ol>
            </div>

            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Environment Variable:</h4>
              <div className="flex items-center space-x-2">
                <code className="bg-white/10 px-3 py-2 rounded text-purple-300 flex-1">
                  DISCORD_WEBHOOK_URL=your_webhook_url_here
                </code>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard("DISCORD_WEBHOOK_URL=", "discord")}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  {copiedText === "discord" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Method 3: SMS */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Smartphone className="w-8 h-8 text-green-400 mr-3" />
            <div>
              <h3 className="text-xl font-bold text-white">SMS via Twilio</h3>
              <p className="text-yellow-400 text-sm">💰 PAID • ✅ RELIABLE • 📱 DIRECT TO PHONE</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Setup Steps:</h4>
              <ol className="text-white/80 text-sm space-y-1 list-decimal list-inside">
                <li>Sign up at twilio.com (free trial available)</li>
                <li>Get a Twilio phone number</li>
                <li>Copy your Account SID and Auth Token</li>
                <li>Add your phone number</li>
              </ol>
            </div>

            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Environment Variables:</h4>
              <div className="space-y-2 text-sm">
                <code className="block bg-white/10 px-3 py-2 rounded text-green-300">
                  TWILIO_ACCOUNT_SID=your_account_sid
                </code>
                <code className="block bg-white/10 px-3 py-2 rounded text-green-300">
                  TWILIO_AUTH_TOKEN=your_auth_token
                </code>
                <code className="block bg-white/10 px-3 py-2 rounded text-green-300">
                  TWILIO_PHONE_NUMBER=+1234567890
                </code>
                <code className="block bg-white/10 px-3 py-2 rounded text-green-300">
                  YOUR_PHONE_NUMBER=+91911078996
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Start */}
      <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-4">🚀 Quick Start Recommendation</h3>
          <p className="text-white/80 mb-4">
            For the fastest setup, I recommend starting with <strong>Telegram</strong>. It's free, instant, and takes
            just 5 minutes to set up!
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => window.open("https://t.me/botfather", "_blank")}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Open BotFather
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://core.telegram.org/bots#creating-a-new-bot", "_blank")}
              className="border-white/20 text-white hover:bg-white/10"
            >
              View Guide
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
