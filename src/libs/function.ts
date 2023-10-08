export const parsePasswordType = (text: string) => {
  return text
    .split("")
    .map(() => "*")
    .join("");
};
