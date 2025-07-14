import { SearchClient } from "./_components/SearchClient";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ searchValue: string }>;
}) {
  const { searchValue } = await searchParams;
  console.log("seeatchhdfvwev", searchValue);
  return (
    <div>
      <SearchClient searchValue={searchValue} />
    </div>
  );
}
