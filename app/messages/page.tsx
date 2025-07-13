import { readFile } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, User, Clock } from "lucide-react"

interface Message {
  id: number
  name: string
  message: string
  timestamp: string
  date: string
}

async function getMessages(): Promise<Message[]> {
  try {
    const messagesFile = path.join(process.cwd(), "messages", "contacts.json")

    if (!existsSync(messagesFile)) {
      return []
    }

    const fileContent = await readFile(messagesFile, "utf-8")
    return JSON.parse(fileContent)
  } catch (error) {
    console.error("Error reading messages:", error)
    return []
  }
}

export default async function MessagesPage() {
  const messages = await getMessages()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
            Contact Messages
          </h1>
          <p className="text-white/70">Total messages: {messages.length}</p>
        </div>

        {messages.length === 0 ? (
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8 text-center">
              <Mail className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">No messages yet</h2>
              <p className="text-white/70">Messages from your contact form will appear here.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <Card
                key={message.id}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{message.name}</h3>
                        <div className="flex items-center text-white/60 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {message.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-white/90 leading-relaxed whitespace-pre-wrap">{message.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}
