export const WHATSAPP_NUMBER = "918903198728";

export const PROPOSAL_MESSAGE =
  "Hi, I'd like a custom proposal from Nexora for my business.";

export function whatsappUrl(message: string = PROPOSAL_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
