import { InferInsertModel, and, eq } from "drizzle-orm";
import { roles } from "../../db/schema";
import { db } from "../../db";
import { logger } from "../../utils/logger";

export async function createRole(data: InferInsertModel<typeof roles>) {
  
  const result = await db.insert(roles).values(data).returning();

  return result[0];
}

export async function getRoleByName({
  name,
  applicationId
}: {
    name: string;
    applicationId: string;
}) {
  const result = await db.select().from(roles).where(and(eq(roles.name, name), eq(roles.applicationId, applicationId))).limit(1);
  
  logger.debug(result,"result")
  return result[0];
}