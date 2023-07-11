export const formatDateIndo = (p) => {
  // 20-10-1990
  if (!p) return;
  let d = new Date(p);
  d = Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
  return d;
};
