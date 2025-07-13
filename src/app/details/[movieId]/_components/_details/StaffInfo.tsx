import { Crew } from "@/types";

interface StaffType{
  staffDirector:Crew[],
  writer: Crew[];
  stars: string[];
}

export const StaffInformation = ({ staffDirector, writer, stars }:StaffType) => {
  return (
    <table className="table-fixed  w-full mx-5">
      <tbody className="border-b  border-[#E4E4E7] divide-y w-full">
        <tr className="text-left">
          <th className="pb-1 pt-5"> Director</th>

          {staffDirector.map((info, id) => (
            <td key={id} className="pb-1 pt-5 pl-[53px]">
              {info?.name}
            </td>
          ))}

          {/* {staffData?.crew?.map(
            (info, index) =>
              info.job === "Director" && (
                <td className="pb-1 pt-5 " key={index}>
                  {info?.name}
                </td>
              )
          )} */}
        </tr>

        <tr className="text-left">
          <th className="pb-1 pt-5">Writers</th>
          <td className="flex pl-[53px] gap-1 flex-wrap">
            {writer.slice(0, 3).map((info, id) => (
              <p key={id} className="pb-1 pt-5 w-fit ">
                {info.name} •
              </p>
            ))}
          </td>
        </tr>

        <tr className="text-left">
          <th className="pb-1 pt-5">Stars</th>
          <td className="pb-1 pt-5 pl-[53px]">{stars}</td>
        </tr>
      </tbody>
    </table>
  );
};
