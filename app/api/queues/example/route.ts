import { db, schema } from "@/lib/db"
import { Queue } from "quirrel/next-app"

export const exampleQueue = Queue(
  "api/queues/example",
  async job => {
    console.log("Running!");
    await db.insert(schema.companies).values({});
  }
)

export const POST = exampleQueue