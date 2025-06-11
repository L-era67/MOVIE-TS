import { SeeMoreClient } from "./components/SeeMoreClient";

export default async function Page({
  params,
}: {
  params: Promise<{ seeMoreId: string }>;
}) {
  const { seeMoreId } =await params;

  return <div>
    <SeeMoreClient SeeMoreId={seeMoreId}/>
  </div>;
}
