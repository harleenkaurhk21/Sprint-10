export function getYear(date) {
  if (!date) return "N/A";

  return date.split("-")[0];
}

export function formatRating(rating) {
  return Number(rating).toFixed(1);
}

export function truncateText(text, limit = 120) {
  if (!text) return "";

  if (text.length <= limit) return text;

  return text.substring(0, limit) + "...";
}

export function sortMoviesByRating(movies) {
  return [...movies].sort((a, b) => b.vote_average - a.vote_average);
}

export function sortMoviesByYear(movies) {
  return [...movies].sort(
    (a, b) =>
      new Date(b.release_date) -
      new Date(a.release_date)
  );
}
