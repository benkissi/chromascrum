import { TToastType } from "./types";
import { target } from "./toastEventBus";

export const getInitials = (name = "") => {
  if (!name) return "";
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return initials.substring(0, 2);
};

export const toastify: (message: string, type?: TToastType) => void = (
  message = "",
  type = "info"
) => {
  target.dispatchEvent(
    new CustomEvent("toastify", { detail: { message, type } })
  );
};
