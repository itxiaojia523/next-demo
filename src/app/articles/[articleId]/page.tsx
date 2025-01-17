"use client";
import Link from "next/link";
import { use } from "react";
export default function NewsArticles({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  // client component不能使用async await ，通过use方法来访问params
  // 注意layout只能访问params
  const { articleId } = use(params);
  // "/articles/breaking-news?lang=en"
  const { lang = "en" } = use(searchParams);
  return (
    <>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </>
  );
}
