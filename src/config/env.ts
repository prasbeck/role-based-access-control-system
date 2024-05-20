import  Zennv  from "zennv";
import { z } from "zod";

export const env = Zennv({
	dotenv:true,
	schema: z.object({
		PORT: z.number().default(3000),
		HOST: z.string().default('0.0.0.0'),
		DATABASE_CONNECTION: z.string(),
	})
})