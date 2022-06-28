import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
// import { sync } from "glob";

const articlesPath = path.join(process.cwd(), "pages/articles");

// export async function getArticleFromSlug(slug: string) {
//   const articleDir = path.join(articlesPath, `${slug}.mdx`);
//   const source = fs.readFileSync(articleDir);
//   const { content, data } = matter(source);

//   return {
//     content,
//     frontmatter: {
//       slug,
//       excerpt: data.excerpt,
//       title: data.title,
//       publishedAt: data.publishedAt,
//       readingTime: readingTime(source as string).text,
//       ...data
//     }
//   };
// }

export interface Article {
  [key: string]: any;
  slug: string;
}

export function getAllArticles(): Article[] {
  const articles = fs.readdirSync(path.join(process.cwd(), "pages/articles"));

  return articles.reduce((allArticles: Article[], articleSlug: string) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), "pages/articles", articleSlug),
      "utf-8"
    );
    const { data } = matter(source);

    const article: Article = {
      ...data,
      slug: articleSlug.replace(".mdx", ""),
      readingTime: readingTime(source).text
    };

    return [article, ...allArticles];
  }, []);
}
