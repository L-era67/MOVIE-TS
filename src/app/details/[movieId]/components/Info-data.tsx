
import { useEffect, useState } from "react";
import { StaffInformation } from "./StaffInfo";
import { Crew, Director, MovieProps, StaffInfo } from "@/types";
import { getStaffInfo } from "@/utils/detail/get-staff-infor";


export const InfoData = ({ movieId }:{movieId:number}) => {
  //   const [staffData, setStaffData] = useState({});
  
  const [director, setDirector] = useState([]);
  const [writer, setWriter] = useState([]);
  const [stars, setStars] = useState([]);


  const InfoData = async () => {
    try {
      const dataIndo:StaffInfo = await getStaffInfo(movieId);
      console.log("data Info API", dataIndo);
      

      const directorFilter:Crew[] = dataIndo?.crew?.filter(
        (info) => info.job === "Director"
      );
      setDirector(directorFilter);
      console.log("DIRECTOR FILTER", directorFilter);
      

      const writerFilter = dataIndo?.crew?.filter(
        (info) => info.department === "Writing"
      );

      setWriter(writerFilter);

      const starsFiltered = dataIndo?.cast
        ?.slice(0, 3)
        .map((info) => info.name + " • ");

      setStars(starsFiltered);
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