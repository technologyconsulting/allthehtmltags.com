import Header from "@/components/header";
import TagList from "@/components/tag-list";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header title="HTML tags list with examples" />
      <main className="container mx-auto flex-1">
        <section className="grid-col-1 grid gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <TagList />
        </section>
      </main>
    </>
  );
}
