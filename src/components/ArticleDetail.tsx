import { Card } from "antd";
import type { Article } from "../domain/article";

interface Props {
  article: Article;
}
export default function ArticleDetail({ article }: Props) {
  return (
    <Card title={article.title} cover={<img alt={article.title} src={article.urlToImage} />}>
      <p>{article.content}</p>
      <p><b>Author:</b> {article.author}</p>
      <p><b>Published At:</b> {article.publishedAt}</p>
      <a href={article.url} target="_blank" rel="noreferrer">Baca selengkapnya</a>
    </Card>
  );
}