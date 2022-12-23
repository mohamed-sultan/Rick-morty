export const saveAppearance = (isDark: Boolean) => {
  localStorage.setItem("dark", isDark ? "true" : "false");
};
export const saveInitialAppearance = () => {
  const isDark = localStorage.getItem("dark") === "true";
  return isDark;
};
