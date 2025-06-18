import { parseISO, format } from 'date-fns';

/**
 * Format a date in a human-readable format
 * @param {Date|string} date The date to format
 * @param {string} formatStr The format string (default: 'MMMM d, yyyy')
 * @returns {string} The formatted date
 */
function formatDate(date, formatStr = "MMMM d, yyyy") {
  if (!date) return "";
  
  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  
  return format(dateObj, formatStr);
}

/**
 * Check if a date is in the future
 * @param {Date|string} date The date to check
 * @returns {boolean} True if the date is in the future
 */
function isFutureDate(date) {
  if (!date) return false;
  
  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  
  return dateObj > new Date();
}

/**
 * Check if a date is in the past
 * @param {Date|string} date The date to check
 * @returns {boolean} True if the date is in the past
 */
function isPastDate(date) {
  if (!date) return false;
  
  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  
  return dateObj < new Date();
}

export { isPastDate as a, formatDate as f, isFutureDate as i };
