import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

test('renders articles', () => {
  const articles = [
    {
      title: "A",
      urlToImage: "https://dummyimage.com/600x400",
      description: "desc",
      url: "https://example.com",
      content: "content",
      publishedAt: "2025-05-27",
      author: "Author"
    }
  ];

  render(
    <MemoryRouter>
      <ArticleList articles={articles} />
    </MemoryRouter>
  );
  expect(screen.getByText("A")).toBeInTheDocument();
});