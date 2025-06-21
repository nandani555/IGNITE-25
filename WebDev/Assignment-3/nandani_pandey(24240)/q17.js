/**
 * Parses user data from JSON string, validates required fields,
 * and returns a structured result.
 *
 * @param {string} jsonString
 * @returns {{ success: boolean, data?: object, error?: string }}
 */
function parseAndValidateUser(jsonString) {
  let obj;
  try {
    obj = JSON.parse(jsonString);
  } catch (e) {
    return { success: false, error: 'Invalid JSON format' };
  }

  const { name, email, age, ...rest } = obj;

  if (typeof name !== 'string' || !name.trim()) {
    return { success: false, error: 'Missing or invalid "name"' };
  }
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Missing or invalid "email"' };
  }
  if (typeof age !== 'number' || age <= 0 || !Number.isInteger(age)) {
    return { success: false, error: 'Missing or invalid "age"' };
  }

  const cleaned = { name: name.trim(), email: email.trim(), age };
  return { success: true, data: cleaned };
}

 