import React from "react";
import { MotionConfig } from "framer-motion";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";

import { getBlogPostList } from "../helpers/file-helpers";

import { BLOG_TITLE } from "../constants";

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

async function Home() {
  const posts = await getBlogPostList();

  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.wrapper}>
        <h1 className={styles.mainHeading}>Latest Content:</h1>

        {posts.map((post) => (
          <BlogSummaryCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            abstract={post.abstract}
            publishedOn={post.publishedOn}
          />
        ))}
      </div>
    </MotionConfig>
  );
}

export default Home;
