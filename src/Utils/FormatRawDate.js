const FormatRawDate = (cand, time = false) => {
  const rawDate = cand?.docDate ? cand?.docDate : cand.CreatedAt;
  if (rawDate) {
    const match = rawDate.match(/\d+/);
    const timestamp = parseInt(match[0], 10);
    const date = new Date(timestamp);
    const formatted = time
      ? new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(date)
      : new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(date);

    return formatted;
  }
  return "";
};

export default FormatRawDate;
