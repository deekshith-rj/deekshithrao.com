import ArticleBody from "@/components/ArticleBody";
import Head from "next/head";
import { fetchRemoteData } from "@/fetch";
import ArticleFooter from "@/components/ArticleFooter";
import ArticleHeader from "@/components/ArticleHeader";

export default function Article({ title, image, body, tags, meta }) {
  return (
    <main>
      <Head>
        <title>{`${meta.title} - Deekshith Rao`}</title>
        <meta name="description" content={meta.description} />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@samirelanduk" name="twitter:site" />
        <meta content={meta.title} name="twitter:title" />
        <meta content={meta.description} name="twitter:description" />
        <meta
          content={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${image}`}
          property="twitter:image"
        />
        <meta
          content={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${image}`}
          property="og:image"
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
      </Head>
      <article className="px-4 max-w-5xl mx-auto">
        <ArticleHeader title={title} body={body} />
        <ArticleBody blocks={body} />
        <ArticleFooter tags={tags} title={title} />
      </article>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const data = await fetchRemoteData(`projects/${params.slug}`);
  if (!data) return { notFound: true };
  return {
    props: {
      title: data.title,
      image: data.image,
      body: data.body,
      tags: data.tags,
      meta: data.meta,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetchRemoteData("projects/", { projects: [] });
  const staticPaths = {
    paths: data.projects.map((article) => ({ params: { slug: article.slug } })),
    fallback: "blocking",
  };
  return staticPaths;
}
