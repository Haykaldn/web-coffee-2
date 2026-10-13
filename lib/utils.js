export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// "Croissant Mentega" -> "CM"
export const initials = (text) =>
  text
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);

// 1 -> "01"
export const twoDigits = (number) => String(number).padStart(2, "0");
