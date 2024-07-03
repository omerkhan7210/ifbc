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

export function validateUsername(username) {
  // Basic username validation: alphanumeric, starts with a letter, 3-16 characters long
  return /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(username);
}
