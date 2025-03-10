import { db, schema } from "@/lib/db";

export default async function Home() {
  const companies = await db.select().from(schema.companies);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>Companies: {companies.length}</div>
    </div>
  );
}
