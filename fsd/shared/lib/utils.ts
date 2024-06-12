import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function onUnmaskedChange(
  e: React.ChangeEvent<HTMLInputElement>,
  cb: (e: React.ChangeEvent<HTMLInputElement>) => void
) {
  const val = e.target.value;

  const unmask = val.replace(/[^\d]/g, "");

  e.target.value = unmask;

  cb(e);
}
