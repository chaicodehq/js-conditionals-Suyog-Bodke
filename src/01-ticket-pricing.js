/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  if (typeof age !== "number" || typeof isWeekend !== "boolean" || age < 0)
    return -1;

  let normalPrice;
  let weekendPrice;

  if (age < 13) {
    normalPrice = 8;
    weekendPrice = 11;
  } else if (age < 18) {
    normalPrice = 12;
    weekendPrice = 15;
  } else if (age < 60) {
    normalPrice = 15;
    weekendPrice = 18;
  } else {
    normalPrice = 10;
    weekendPrice = 13;
  }

  return isWeekend ? weekendPrice : normalPrice;
}
