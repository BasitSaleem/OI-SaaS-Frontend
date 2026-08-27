"use server";

import { ContactFormData } from "@/utils/contactSchema";

export async function submitLeadAction(data: ContactFormData) {
  try {
    const nameParts = data.name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const webhookParams = new URLSearchParams({
      first_name: firstName,
      last_name: lastName,
      email: data.email,
      phone_number: data.phone,
      selected_service: data.subject,
      client_notes: `Company: ${data.company}\nCompany Size: ${data.companySize}\nMessage: ${data.message}`,
    });

    const webhookUrl = `https://vicidialwebhook.redstartechnologies.com/contact-lead?${webhookParams.toString()}`;

    const response = await fetch(webhookUrl, {
      method: "GET",
    });

    if (!response.ok) {
      console.error(`Webhook returned status: ${response.status}`);
      return { success: false, error: `Server error: ${response.status}` };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Server Action Error:", error);
    return { success: false, error: error.message || "Server Action Error" };
  }
}
