export interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    content: string;
    publishedAt: string;
    author: string;
    source?: {
      name?: string;
    };
  }