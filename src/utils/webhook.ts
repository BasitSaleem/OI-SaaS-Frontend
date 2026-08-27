import { ContactFormData } from "./contactSchema";

export async function sendLeadToWebhook(data: ContactFormData) {
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
      console.warn(`Webhook integration responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to send lead to webhook:", error);
  }
}
