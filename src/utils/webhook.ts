import { ContactFormData } from "./contactSchema";

export async function sendLeadToWebhook(data: ContactFormData) {
  try {
    const nameParts = data.name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const webhookUrl = "https://vicidialwebhook.redstartechnologies.com/contact-lead";
    const webhookPayload = {
      first_name: firstName,
      last_name: lastName,
      email: data.email,
      phone_number: data.phone,
      selected_service: data.subject,
      client_notes: `Company: ${data.company}\nCompany Size: ${data.companySize}\nMessage: ${data.message}`,
    };

    const response = await fetch(webhookUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookPayload),
    });

    if (!response.ok) {
      console.warn(`Webhook integration responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to send lead to webhook:", error);
  }
}
