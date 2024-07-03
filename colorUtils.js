import { Color } from "framer";

// Function to convert hex to HSL
const hexToHsl = (hex) => {
  const { r, g, b } = Color.parse(hex);
  return Color.toHsl(Color(r, g, b));
};

// Function to convert HSL to hex
const hslToHex = (h, s, l) => {
  return Color(Color.fromHsl(h, s, l)).hex;
};

// Generate complementary color
export const complementary = (primaryColor) => {
  const hsl = hexToHsl(primaryColor);
  const complementaryHue = (hsl.h + 180) % 360;
  return [hslToHex(complementaryHue, hsl.s, hsl.l)];
};

// Generate triadic colors
export const triadic = (primaryColor) => {
  const hsl = hexToHsl(primaryColor);
  const hue1 = (hsl.h + 120) % 360;
  const hue2 = (hsl.h + 240) % 360;
  return [hslToHex(hue1, hsl.s, hsl.l), hslToHex(hue2, hsl.s, l)];
};

// Generate analogous colors
export const analogous = (primaryColor) => {
  const hsl = hexToHsl(primaryColor);
  const hue1 = (hsl.h + 30) % 360;
  const hue2 = (hsl.h - 30 + 360) % 360;
  return [hslToHex(hue1, hsl.s, hsl.l), hslToHex(hue2, hsl.s, hsl.l)];
};
