export async function fetchArticles() {
  const res = await fetch(import.meta.env.PUBLIC_DEV_TO_API_URL + "articles/me/published", {
    headers: {
      "api-key": import.meta.env.DEV_API_KEY,
    },
  });
  const data = await res.json();
  const articles = data;

  return articles;
}