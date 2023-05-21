export const getInitials = (name = "") => {
  if (!name) return "";
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return initials.substring(0, 2);
};
