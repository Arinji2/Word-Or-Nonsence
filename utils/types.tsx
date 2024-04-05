import z from "zod";
import { LogicSchema } from "./schema";

export type WordType = z.infer<typeof LogicSchema>;

export interface Player {
  name: string;
  personSeed: string;
}
