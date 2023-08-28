import ArticleBody from "@/components/ArticleBody";
import Head from "next/head";

export default function Article({title, date, body, tags}) {
  return (
    <main>
      <Head>
        <title>{title} - Sam Ireland</title>
      </Head>
      <h1>{title}</h1>
      <time>{date}</time>
      <ArticleBody blocks={body} />
      <div>
        {tags.map(tag => (
          <span key={tag.name}>{tag.name}</span>
        ))}
      </div>
    </main>
  )
}


export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/writing/${params.slug}`)
  const data = await res.json()

  return {
    props: {
      title: data.title,
      date: data.date,
      body: data.body,
      tags: data.tags
    }
  }
}