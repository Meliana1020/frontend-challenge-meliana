import { List, Card } from "antd";
import type { Article } from "../domain/article";
import { Link } from "react-router-dom";

interface Props {
  articles: Article[];
}
export default function ArticleList({ articles }: Props) {
  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={articles}
      renderItem={item => (
        <List.Item>
          <Link to={`/detail/${encodeURIComponent(item.title)}`}>
            <Card
              title={item.title}
              cover={
                item.urlToImage
                  ? <img alt={item.title} src={item.urlToImage} />
                  : null
              }
            >
              {item.description}
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );
}