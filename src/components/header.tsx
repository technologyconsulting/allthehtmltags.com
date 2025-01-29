import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <header className="container mx-auto flex flex-col">
      <div className="flex items-center justify-center md:justify-start">
        <div className="flex flex-col items-center md:flex-row md:items-center">
          <section className="-ml-2 flex">
            <span className="text-[#1db489]">
              <ChevronLeftIcon width={32} height={32} />
            </span>
            <h1 className="-mx-1 text-2xl">All the HTML Tags</h1>
            <span className="text-[#1db489]">
              <ChevronRightIcon width={32} height={32} />
            </span>
          </section>
          <section className="-ml-1 flex">
            <span className="-mr-1 text-[#1db489]">
              <ChevronLeftIcon width={24} height={24} />
            </span>
            <span className="text-[#1db489]">!--</span>
            &nbsp;
            {title}
            &nbsp;
            <span className="text-[#1db489]">--</span>
            <span className="-ml-1 text-[#1db489]">
              <ChevronRightIcon width={24} height={24} />
            </span>
          </section>
        </div>
      </div>
      <section className="flex items-center justify-between">
        <nav>
          <ul className="my-4 flex gap-4">
            <li className="rounded-md bg-[--primary-button] px-4 py-2 text-[--primary-button-text] hover:bg-[--primary-button-active]">
              <Link href="\">Home</Link>
            </li>
            <li className="rounded-md bg-[--primary-button] px-4 py-2 text-[--primary-button-text] hover:bg-[--primary-button-active]">
              <Link href="\community">Community</Link>
            </li>
          </ul>
        </nav>
        <section className="">
          <ThemeToggle />
        </section>
      </section>
    </header>
  );
}
