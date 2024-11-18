'use client'

import { BlogNewsSection } from "../(home)/sections/blog-news-section";
import { BlogPosts } from "./blog-and-news-data";

function ResourcePage() {

  return (
    <>
      <BlogNewsSection isDisplayViewAllButton={false} blogPosts={BlogPosts} />
    </>
  );
}

export default ResourcePage;
