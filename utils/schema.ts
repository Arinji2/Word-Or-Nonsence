import z from "zod";
export const LogicSchema = z.object({
  word: z.string(),
  definition: z.string(),
  mode: z.string(),
});

export const SavedWordSchema = z.object({
  id: z.number(),
  word: z.string(),
  definition: z.string(),

  created_on: z.date(),
});
