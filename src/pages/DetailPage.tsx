import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleDetail } from "../domain/articleUsecase";
import ArticleDetail from "../components/ArticleDetail";
import { Spin } from "antd";
import type { Article } from "../domain/article";

export default function DetailPage() {
  const { title } = useParams<{ title: string }>();
  const [article, setArticle] = useState<Article | undefined>(undefined);

  useEffect(() => {
    getArticleDetail(decodeURIComponent(title!)).then(setArticle);
  }, [title]);

  return !article ? <Spin /> : <ArticleDetail article={article} />;
}