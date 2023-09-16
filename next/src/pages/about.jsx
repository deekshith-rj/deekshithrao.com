import Head from "next/head";
import Event from "../components/Event";
import { fetchRemoteData } from "@/fetch";

export default function About({title, text, events, meta}) {
  return (
    <main>
      <Head>
        <title>{`${meta.title} - Sam Ireland`}</title>
        <meta name="description" content={meta.description} />
        <meta content="summary_large_image" name="twitter:card"/>
        <meta content="@samirelanduk" name="twitter:site"/>
        <meta content={meta.title} name="twitter:title"/>
        <meta content={meta.description} name="twitter:description"/>
        <meta content="https://samireland.com/images/social-card.png" name="twitter:image"/>
        <meta content="https://samireland.com/images/social-card.png" property="og:image"/>
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
      </Head>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: text}} />
      <div>
        {events.map((event, index) => <Event key={index} event={event} />)}
      </div>
    </main>
  )
}


export async function getStaticProps() {
  const data = await fetchRemoteData("about", {
    title: "", text: "", events: [], meta: {}
  });
  if (!data) return {notFound: true};
  return {
    props: {
      title: data.title,
      text: data.text,
      events: data.events,
      meta: data.meta
    }
  }
}