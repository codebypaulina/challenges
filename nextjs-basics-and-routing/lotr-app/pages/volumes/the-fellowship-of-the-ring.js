import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function TheFellowshipOfTheRing() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map(({ ordinal, title }) => {
          return (
            <li key={ordinal}>
              <p>{ordinal}</p>
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
