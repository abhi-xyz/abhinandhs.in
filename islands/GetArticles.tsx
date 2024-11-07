export interface Article {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
}

// Simulated async function to fetch articles (replace with actual fetching logic)
export const getArticles = async (): Promise<Article[]> => {
  // Here you might want to fetch from a database or API.
  // This is just a static example for demonstration.
  return [
    {
      title: "First Article",
      slug: "first-article",
      description: "This is the first article description.",
      publishedAt: "2024-11-07T10:00:00Z",
    },
    {
      title: "Second Article",
      slug: "second-article",
      description: "This is the second article description.",
      publishedAt: "2024-11-06T14:00:00Z",
    },
  ];
};

