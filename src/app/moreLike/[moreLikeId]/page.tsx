import { MoreLikeClient } from "./components/MoreLikeClient";

export default async function Page({
  params,
}: {
  params: Promise<{ moreLikeId: string }>;
}) {
    const {moreLikeId} = await params;
    const moreId = Number(moreLikeId)

   return(
    <div>
        <MoreLikeClient moreLikeId = {moreId}/>
    </div>
   )
    
}
