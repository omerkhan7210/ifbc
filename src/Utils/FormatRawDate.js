const FormatRawDate = (cand) => {
  const rawDate = cand.DocDate ? cand.DocDate : cand.CreatedAt;
  const match = rawDate.match(/\d+/);
  const timestamp = parseInt(match[0], 10);
  const date = new Date(timestamp);
  const formatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  return formatted;
};

export default FormatRawDate;
