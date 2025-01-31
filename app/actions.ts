"use server";

import { db, schema } from "@/lib/db";
import { exampleQueue } from "./api/queues/example/route";

export async function scheduleJob() {
    await exampleQueue.enqueue({});
}