// Example validation functions
export function validateEmail(email) {
  // Basic email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone) {
  // Basic phone number validation
  return /^[0-9]{11}$/.test(phone); // Adjust regex as needed
}

export function sanitizeInput(input) {
  // Example: trim whitespace and remove script tags
  return input.trim().replace(/<script.*?>.*?<\/script>/gi, "");
}

export function validateUsername(username) {
  // Basic username validation: alphanumeric, starts with a letter, 3-16 characters long
  return /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(username);
}
export function removeSpecificText(input, textToRemove) {
  const regex = new RegExp(textToRemove, "gi");
  return input.replace(regex, "").trim();
}

export function extractMinValue(range) {
  // Remove any non-numeric characters except for the dash
  const cleanedRange = range.replace(/[^0-9-]/g, "");
  // Split the range and convert the first part to a number
  const [minValue] = cleanedRange.split("-").map(Number);
  return minValue;
}
