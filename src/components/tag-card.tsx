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
    <article className="my-2 bg-slate-400">
      <h2>{tag.title}</h2>
      <p>{tag.type}</p>
      <p>{tag.category}</p>
      <p>{tag.description}</p>
      <p>{tag.referenced}</p>
      <p>{tag.examples}</p>
      <button>{tag.title} Tag Examples</button>
    </article>
  );
}
