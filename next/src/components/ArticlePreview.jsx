import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { formatDate } from "@/utils";

const ArticlePreview = (props) => {
  const { article } = props;

  return (
    <Link
      href={`/blog/${article.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-y-4 gap-x-4 group w-full max-w-sm sm:max-w-3xl sm:flex-row  lg:max-w-4xl 3xl:max-w-2xl"
    >
      <img
        alt={article.title}
        className="w-96 h-72 rounded max-w-full object-cover flex-shrink-0 sm:w-64 sm:h-48 md:w-72 md:h-54 xl:w-96 xl:h-72 3xl:w-72 3xl:h-54"
        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${article.image}`}
      />
      <div className="">
        <h2 className="font-serif font-semibold text-slate-800 text-lg mb-1 transition duration-500 group-hover:text-green-sidc md:text-xl xl:text-2xl 3xl:text-xl">
          {article.title}
        </h2>
        <time className="text-slate-500 text-sm mb-1.5 block md:text-base xl:text-lg 3xl:text-base">
          {formatDate(article.date)}
        </time>
        <div className="text-slate-700 text-sm mb-2 md:text-base xl:text-lg 3xl:text-base">
          {article.intro}
        </div>
        <div className="flex flex-wrap gap-3 font-semibold text-xs md:text-sm text-slate-900 lg:text-base xl:text-lg 3xl:text-base">
          {article.tags.map((tag) => (
            <div key={tag.name}>#{tag.name}</div>
          ))}
        </div>
      </div>
    </Link>
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticlePreview;
