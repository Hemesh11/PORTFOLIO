"use client"

import { useEffect } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { submitContactForm, type ContactFormState } from "../app/actions/contact"

const initialState: ContactFormState = {}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </>
      )}
    </Button>
  )
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState)

  useEffect(() => {
    if (state.success) {
      // Reset form on successful submission
      const form = document.getElementById("contact-form") as HTMLFormElement
      if (form) {
        form.reset()
      }
    }
  }, [state.success])

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardContent className="p-8">
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Send me a message</h3>
          <p className="text-white/70 text-sm">Just your name and message - that's all I need!</p>
        </div>

        <form id="contact-form" action={formAction} className="space-y-6">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400"
              required
            />
            {state.errors?.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {state.errors.name[0]}
              </motion.p>
            )}
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message (Tell me about your project, question, or just say hi!)"
              rows={6}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 resize-none"
              required
            />
            {state.errors?.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {state.errors.message[0]}
              </motion.p>
            )}
          </div>

          <SubmitButton />

          {/* Success/Error Messages */}
          <AnimatePresence mode="wait">
            {state.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-4 rounded-lg flex items-start ${
                  state.success
                    ? "bg-green-500/20 border border-green-500/30 text-green-300"
                    : "bg-red-500/20 border border-red-500/30 text-red-300"
                }`}
              >
                {state.success ? (
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                )}
                <span className="text-sm leading-relaxed">{state.message}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        {/* Instructions */}
        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-300 text-sm text-center">💡 Your message will be saved and I'll see it right away!</p>
        </div>
      </CardContent>
    </Card>
  )
}
