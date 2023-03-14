export const getStorage = <T>(key: string): T | undefined => {
  if (typeof window === "undefined") return;
  const item = localStorage.getItem(key);
  return item as T;
};

export const setStorage = <T>(key: string, value: T): void => {
  typeof window !== "undefined" && localStorage.setItem(key, value as string);
};
