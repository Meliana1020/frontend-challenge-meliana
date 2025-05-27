import axios from "axios";

const API_KEY = "c9c18b2d5d4a4a13ae8046d83e253a6c";
const BASE_URL = "https://newsapi.org/v2";

export const fetchArticles = async () => {
  const res = await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
  return res.data.articles;
};

export const fetchArticleDetail = async (title: string) => {
  // NewsAPI tidak support fetch by id, jadi filter dari list
  const articles = await fetchArticles();
  return articles.find((a: any) => a.title === title);
};