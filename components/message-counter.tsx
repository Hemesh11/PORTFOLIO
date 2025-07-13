import { readFile } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

async function getMessageCount(): Promise<number> {
  try {
    const messagesFile = path.join(process.cwd(), "messages", "contacts.json")

    if (!existsSync(messagesFile)) {
      return 0
    }

    const fileContent = await readFile(messagesFile, "utf-8")
    const messages = JSON.parse(fileContent)
    return messages.length
  } catch (error) {
    return 0
  }
}

export async function MessageCounter() {
  const count = await getMessageCount()

  if (count === 0) return null

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a
        href="/messages"
        className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
      >
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        <span className="text-sm font-medium">
          {count} new message{count !== 1 ? "s" : ""}
        </span>
      </a>
    </div>
  )
}
