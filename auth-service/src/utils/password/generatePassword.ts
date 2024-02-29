import { randomUUID } from "crypto"

export const generatePassword = () => {
const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&';

  let password = '';

  do {
    // Generate a random password
    password = Array.from({ length: 12 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  } while (!pattern.test(password));

  return password;
}