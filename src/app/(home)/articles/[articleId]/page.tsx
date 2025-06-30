"use client"
import Link from "next/link"
import { use } from "react";
//async only works in server components
//use hook is used in client components

//page.tsx has access to params and searchParams
//but layout.tsx have access only to params

const Article =  ({params, searchParams} : {
    params : Promise<{articleId: string}>,
    searchParams : Promise<{lang?: "en" | "fr" | "es"}>,
}) => {
    const {articleId} = use(params);
    const {lang="en"} = use(searchParams);
  return (
    <div>
        <h1>
            News Article
        </h1>
        <p>Reading in language {lang}</p>
        <div className="flex gap-2">
            <Link href={`/articles/${articleId}?lang=en`} className="px-2 py-1 bg-neutral-900 rounded-full">English</Link>
            <Link href={`/articles/${articleId}?lang=fr`} className="px-2 py-1 bg-neutral-900 rounded-full">French</Link>
            <Link href={`/articles/${articleId}?lang=es`} className="px-2 py-1 bg-neutral-900 rounded-full">Spanish</Link>
        </div>
    </div>
  )
}
export default Article