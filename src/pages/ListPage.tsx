import { useEffect, useState } from "react";
import { getArticles } from "../domain/articleUsecase";
import ArticleList from "../components/ArticleList";
import { Spin } from "antd";
import type { Article } from "../domain/article";

export default function ListPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles().then(arts => {
      setArticles(arts);
      setLoading(false);
    });
  }, []);

  return loading ? <Spin /> : <ArticleList articles={articles} />;
}