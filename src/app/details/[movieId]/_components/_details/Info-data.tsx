import { useEffect, useState } from "react";
import { StaffInformation } from "./StaffInfo";
import {  Crew, StaffInfo } from "@/types";
import { getStaffInfo } from "@/utils/detail/get-staff-infor";

export const InfoData = ({ movieId }: { movieId: number }) => {
  //   const [staffData, setStaffData] = useState({});

  const [director, setDirector] = useState<Crew[]>([]);
  const [writer, setWriter] = useState<Crew[]>([]);
  const [stars, setStars] = useState<string[]>([]);

  const InfoData = async () => {
    try {
      const dataInfo: StaffInfo = await getStaffInfo(movieId);
      console.log("data Info API", dataInfo);

      //Directer
      const directorFilter = dataInfo?.crew?.filter(
        (info) => info.job === "Director"
      );
      setDirector(directorFilter);
      console.log("DIRECTOR FILTER", directorFilter);

      //WRITER
      const writerFilter = dataInfo?.crew?.filter(
        (info) => info.department === "Writing"
      );

      setWriter(writerFilter);

      //ACTOR
         
      const starsFiltered = dataInfo?.cast
        ?.slice(0, 3)
        .map((info) => info.name + " • ");

      setStars(starsFiltered);
      console.log("STARS FILTERED", starsFiltered);
      
    } catch (error) {
      console.log("STAFF INFO ERR!", error);
    }
  };

  useEffect(() => {
    if (!movieId) return;
    InfoData();
  }, [movieId]);

  return (
    <div>
      {/* <StaffInformation staffData={staffData} /> */}

      <StaffInformation
        staffDirector={director}
        writer={writer}
        stars={stars}
      />
    </div>
  );
};
