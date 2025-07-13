import { useEffect, useState } from "react";
import { StaffInformation } from "./StaffInfo";
import { Crew, StaffInfo } from "@/types";
import { getStaffInfo } from "@/utils/detail/get-staff-infor";

export const InfoData = ({ movieId }: { movieId: number }) => {
  const [director, setDirector] = useState<Crew[]>([]);
  const [writer, setWriter] = useState<Crew[]>([]);
  const [stars, setStars] = useState<string[]>([]);

  const fetchInfoData = async () => {
    try {
      const dataInfo: StaffInfo = await getStaffInfo(movieId);
      console.log("data Info API", dataInfo);

      // Director
      const directorFilter = dataInfo?.crew?.filter(
        (info) => info.job === "Director"
      );
      setDirector(directorFilter);

      // Writer
      const writerFilter = dataInfo?.crew?.filter(
        (info) => info.department === "Writing"
      );
      setWriter(writerFilter);

      // Actor
      const starsFiltered = dataInfo?.cast
        ?.slice(0, 3)
        .map((info) => info.name + " • ");
      setStars(starsFiltered);

    } catch (error) {
      console.log("STAFF INFO ERR!", error);
    }
  };

  useEffect(() => {
    if (!movieId) return;
    fetchInfoData();
  }, [movieId]);

  return (
    <div>
      <StaffInformation
        staffDirector={director}
        writer={writer}
        stars={stars}
      />
    </div>
  );
};
