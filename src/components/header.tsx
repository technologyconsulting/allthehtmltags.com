import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <header className="flex flex-col">
      <section className="flex justify-between">
        <section className="-ml-2 flex">
          <span className="text-[#1db489]">
            <ChevronLeftIcon width={32} height={32} />
          </span>
          <h1 className="text-2xl">All the HTML Tags</h1>
          <span className="text-[#1db489]">
            <ChevronRightIcon width={32} height={32} />
          </span>
        </section>
        <ThemeToggle />
      </section>
      <section className="my-4 -ml-1 flex">
        <span className="text-[#1db489]">
          <ChevronLeftIcon width={24} height={24} />
        </span>
        <span className="text-[#1db489]">!--</span>
        &nbsp;
        {title}
        &nbsp;
        <span className="text-[#1db489]">--</span>
        <span className="text-[#1db489]">
          <ChevronRightIcon width={24} height={24} />
        </span>
      </section>
      <section>
        <nav>
          <ul className="my-4 flex gap-4">
            <li>
              <Link href="\">Home</Link>
            </li>
            <li>
              <Link href="\community">Community</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
