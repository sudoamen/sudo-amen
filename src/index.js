export const AFFIRMATIONS = [
  "Build with love. sudo(amen).",
  "Clarity is kindness. sudo(amen).",
  "Reduce harm by default. sudo(amen).",
  "Ship with care. sudo(amen).",
  "Secure by design. sudo(amen).",
  "Respect attention. sudo(amen).",
  "Don’t amplify noise. sudo(amen).",
  "Make it simpler. sudo(amen).",
  "Assume future maintainers are human. sudo(amen).",
  "Protect the user first. sudo(amen).",
  "Fail closed. Fail safe. sudo(amen).",
  "Leave it better than you found it. sudo(amen).",
  "Small changes matter. sudo(amen).",
  "Write code you’d trust with your family. sudo(amen).",
  "Calm systems create strong systems. sudo(amen).",
  "Ego off. Care on. sudo(amen).",
  "Optimize for clarity over cleverness. sudo(amen).",
  "Quiet builders move mountains. sudo(amen).",
  "I am not the whole. I contribute. sudo(amen)."
];

export function affirm() {
  return AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)];
}

export function banner() {
  return [
    "sudo(amen)",
    "Build with love. Reduce harm. Increase clarity.",
    "I am not the whole. I contribute."
  ].join("\n");
}