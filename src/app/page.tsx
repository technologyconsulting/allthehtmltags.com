import Header from "@/components/header";
import TagList from "@/components/tag-list";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header title="HTML tags list with examples" />
      <main className="containner flex-1">
        <h1>Main</h1>
        <section>
          <TagList />
        </section>
      </main>
    </>
  );
}
