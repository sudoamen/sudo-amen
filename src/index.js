export const AFFIRMATIONS = [
  "Build with love.",
  "Clarity is kindness.",
  "Reduce harm by default.",
  "Ship with care.",
  "Secure by design.",
  "Respect attention.",
  "Don’t amplify noise.",
  "Make it simpler.",
  "Assume future maintainers are human.",
  "Protect the user first.",
  "Fail closed. Fail safe.",
  "Leave it better than you found it.",
  "Small changes matter.",
  "Write code you’d trust with your family.",
  "Calm systems create strong systems.",
  "Ego off. Care on.",
  "Optimize for clarity over cleverness.",
  "Quiet builders move mountains.",
  "I am not the whole. I contribute."
];

export function affirm() {
  const line =
    AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)];

  return `${line} sudo(amen)`;
}

export function banner() {
  const pick = () =>
    AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)];

  let first = pick();
  let second = pick();

  while (second === first) {
    second = pick();
  }

  return [
    "Build with love. Design with safety. Choose clarity.",
    first,
    second,
    "sudo(amen)"
  ].join("\n");
}