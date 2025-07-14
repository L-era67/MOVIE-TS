import { GenreClient } from "./_components/GenreClient";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ genreIds: string; names: string }>;
}) {
  const { genreIds } = await searchParams;
  const { names } = await searchParams;
  console.log("names, genreIds", genreIds, names);
  return (
    <div>
      <GenreClient genreIds={genreIds} names={names} />
    </div>
  );
}
