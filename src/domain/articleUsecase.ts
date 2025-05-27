import { fetchArticles, fetchArticleDetail } from "../api/newsApi";
import type { Article } from "./article";

export const getArticles = async (): Promise<Article[]> => {
  return await fetchArticles();
};

export const getArticleDetail = async (title: string): Promise<Article | undefined> => {
  return await fetchArticleDetail(title);
};