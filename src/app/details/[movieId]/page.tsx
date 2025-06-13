import { DetailClient } from "./components/DetailClient";

export default async function PageMovieDetail({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;

  console.log("typeof: ", Number(movieId));
  
  const numberMovieId = Number(movieId)

  return (
    <div>
      <DetailClient movieId={numberMovieId} />
    </div>
  );
}

// usestate -> client
// param server
