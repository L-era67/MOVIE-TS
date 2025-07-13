import { DetailClient } from "./_components/DetailClient";


export default async function PageMovieDetail({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;
  
  const numberMovieId = Number(movieId)

  return (
    <div>
      <DetailClient movieId={numberMovieId} />
    </div>
  );
}

// usestate -> client
// param server
