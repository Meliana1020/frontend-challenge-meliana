jest.mock("antd", () => {
  const actualAntd = jest.requireActual("antd");
  const List = ({ dataSource, renderItem }: any) => (
    <div data-testid="antd-list">
      {dataSource && renderItem
        ? dataSource.map((item: any, idx: number) => (
            <div key={item.title || idx}>{renderItem(item, idx)}</div>
          ))
        : null}
    </div>
  );
  List.Item = ({ children }: any) => (
    <div data-testid="antd-list-item">{children}</div>
  );
  const Card = ({ children, title, cover }: any) => (
    <div data-testid="antd-card">
      {cover}
      <div>{title}</div>
      {children}
    </div>
  );
  return {
    ...actualAntd,
    List,
    Card,
  };
});

import { render, screen } from "@testing-library/react";
import ArticleList from "../components/articlelist/ArticleList";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders articles", () => {
  const articles = [
    {
      title: "A",
      urlToImage: "https://dummyimage.com/600x400",
      description: "desc",
      url: "https://example.com",
      content: "content",
      publishedAt: "2025-05-27",
      author: "Author",
    },
  ];

  render(
    <MemoryRouter>
      <ArticleList articles={articles} />
    </MemoryRouter>
  );
  expect(screen.getByText("A")).toBeInTheDocument();
});
