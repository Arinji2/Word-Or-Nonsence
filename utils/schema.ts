import z from "zod";
export const LogicSchema = z.object({
  word: z.string(),
  definition: z.string(),
  mode: z.string(),
});
