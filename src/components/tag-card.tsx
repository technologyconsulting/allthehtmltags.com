import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";

type Props = {
  tag: {
    title: string;
    type: string;
    category: string;
    description: string;
    referenced: number;
    examples: number;
  };
};

export default function TagCard({ tag }: Props) {
  return (
    <article className="my-2 flex w-full flex-col rounded-md bg-[--card-background] px-2 py-4 text-[--card-foreground]">
      <section className="flex justify-center text-4xl">
        <span className="text-[#1db489]">
          <ChevronLeftIcon width={36} height={36} />
        </span>
        <span className="text-[#1db489]"></span>
        &nbsp;
        <h2 className="-ml-3 -mr-3 -mt-1">
          {tag.title}
          {/* {tag.title === "!-- --" ? "!-- comment --" : tag.title} */}
        </h2>
        &nbsp;
        <span className="text-[#1db489]"></span>
        <span className="text-[#1db489]">
          <ChevronRightIcon width={36} height={36} />
        </span>
      </section>
      <section className="my-4 flex justify-around gap-2">
        <fieldset className="w-32 border-2">
          <legend className="ml-2 px-1 text-left text-xs font-bold uppercase text-[--card-text-legend]">
            Type
          </legend>
          <p className="py-2 text-center">{tag.type}</p>
        </fieldset>
        <fieldset className="w-32 border-2">
          <legend className="ml-2 px-1 text-left text-xs font-bold uppercase text-[--card-text-legend]">
            Category
          </legend>
          <p className="py-2 text-center">{tag.category}</p>
        </fieldset>
      </section>
      <p className="my-4 flex flex-1 items-start justify-center text-center text-lg italic text-[--card-text-description]">
        "{tag.description}"
      </p>
      <section className="my-4 flex justify-around gap-4">
        <div>
          <p className="font-bold uppercase">Viewed</p>
          <p className="text-center">{tag.referenced}</p>
        </div>
        <div>
          <p className="font-bold uppercase">Examples</p>
          <p className="text-center">{tag.examples}</p>
        </div>
      </section>
      <button className="w-full rounded-md bg-[--primary-card-button] p-2 text-2xl lowercase">
        {tag.title === "!-- --" ? "comment" : tag.title} Tag Examples
      </button>
    </article>
  );
}
