export const getStorage = (key: string) => {
  if (typeof window === "undefined") return;
  const item = localStorage.getItem(key);
  return item;
};

export const setStorage = (key: string, value: string): void => {
  typeof window !== "undefined" && localStorage.setItem(key, value as string);
};
