import { List, Card, Typography, Space, Divider, Image } from "antd";
import type { Article } from "../../domain/article";
import { Link } from "react-router-dom";
import "./style.css";

const { Title, Text, Paragraph } = Typography;

interface Props {
  articles: Article[];
}

export default function ArticleList({ articles }: Props) {
  return (
    <List
      grid={{ gutter: 24, column: 2 }}
      dataSource={articles}
      renderItem={(item) => (
        <List.Item>
          <Link to={`/detail/${encodeURIComponent(item.title)}`}>
            <Card
              hoverable
              className="article-card"
              cover={
                item.urlToImage ? (
                  <div className="article-image-container">
                    <Image
                      alt={item.title}
                      src={item.urlToImage}
                      preview={false}
                    />
                  </div>
                ) : (
                  <div className="article-image-placeholder">
                    <Text type="secondary">Tidak Ada Gambar</Text>
                  </div>
                )
              }
            >
              <Title level={4} className="article-title">
                {item.title}
              </Title>
              
              {/* Ganti Text menjadi Paragraph untuk ellipsis multi-baris */}
              <Paragraph
                className="article-description"
                ellipsis={{
                  rows: 3,
                  expandable: true,
                  symbol: 'selengkapnya'
                }}
              >
                {item.description}
              </Paragraph>
              
              <Divider style={{ margin: "12px 0" }} />
              
              <Space>
                <Text type="secondary" className="article-meta">
                  {item.source?.name || 'Sumber Tidak Diketahui'}
                </Text>
                <Text type="secondary" className="article-meta">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </Text>
              </Space>
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );
}