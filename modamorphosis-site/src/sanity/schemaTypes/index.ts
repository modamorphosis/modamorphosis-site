import { type SchemaTypeDefinition } from "sanity";
import { aboutSchema } from "./about-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutSchema],
};
