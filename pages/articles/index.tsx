import type { ReactElement } from "react";
import Layout from "@/layouts/articles";
import Head from "next/head";
import type { NextPageWithLayout } from "../_app";
import { getAllArticles, Article } from "../../utils/mdx";

interface Props {
  posts: Article[];
}

const Articles: NextPageWithLayout<Props> = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Articles</title>
        <link rel="canonical" href="http://631am.com" />
      </Head>
      <p>Articles</p>
      {posts.map(post => (
        <p key={post.slug}>
          <a href={post.slug}>{post.slug}</a>
        </p>
      ))}
    </>
  );
};

Articles.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const articles = await getAllArticles();

  articles
    .map(article => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse()
    }
  };
}

export default Articles;
