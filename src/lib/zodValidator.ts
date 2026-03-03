import { ZodType } from "zod";

export type ValidationResult<T> =
  | { success: true; data: T; errors?: never }
  | { success: false; data?: never; errors: { field: string; message: string }[] };

export const zodValidator = <T>(payload: unknown, schema: ZodType<T>): ValidationResult<T> => {
  const validatedPayload = schema.safeParse(payload);

  if (!validatedPayload.success) {
    return {
      success: false,
      errors: validatedPayload.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    };
  }

  return {
    success: true,
    data: validatedPayload.data,
  };
};