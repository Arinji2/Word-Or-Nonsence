import z from "zod";
import { LogicSchema, SavedWordSchema } from "./schema";

export type WordType = z.infer<typeof LogicSchema>;
export type SavedWordSchemaType = z.infer<typeof SavedWordSchema>;

export interface Player {
  name: string;
  personSeed: string;
}
