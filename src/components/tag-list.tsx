import React from "react";
import TagCard from "./tag-card";

// type Props = {
// };

const data = [
  {
    title: "!-- --",
    type: "metadata",
    category: "metadata",
    description:
      "Allow developers to insert notes or explanations directly within the source code",
    referenced: 1,
    examples: 1,
  },
  {
    title: "DOCTYPE",
    type: "metadata",
    category: "metadata",
    description:
      "Defines the HTML version used for browser rendering and compatibility",
    referenced: 1,
    examples: 1,
  },
  {
    title: "a",
    type: "inline",
    category: "linking",
    description: "Defines a hyperlink",
    referenced: 1,
    examples: 1,
  },
];

// export default function TagList({ }: Props) {
export default function TagList() {
  const tags = data.map((tag) => {
    return <TagCard key={tag.title} tag={tag} />;
  });

  return <>{tags}</>;
}
