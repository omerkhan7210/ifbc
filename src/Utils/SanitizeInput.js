// Example validation functions
export function validateEmail(email) {
  // Basic email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone) {
  // Basic phone number validation
  return /^[0-9]{10}$/.test(phone); // Adjust regex as needed
}

export function sanitizeInput(input) {
  // Example: trim whitespace and remove script tags
  return input.trim().replace(/<script.*?>.*?<\/script>/gi, "");
}
