import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^\+?[0-9]{8,15}$/,
      "Please enter a valid international phone number (8–15 digits, optionally starting with +)",
    ),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(50, "Company name must be at most 50 characters"),
  companySize: z
    .string()
    .min(2, "Company size must be at least 2 characters")
    .max(50, "Company size must be at most 50 characters"),
  subject: z
    .string()
    .min(2, "Subject must be at least 2 characters")
    .max(100, "Subject must be at most 100 characters"),
  message: z.string().min(2, "Message must be at least 2 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
