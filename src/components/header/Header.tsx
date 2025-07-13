"use client";

import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  // const [searchBtn, setSearchBtn] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="relative flex justify-between items-center px-5 mt-4 mb-6">
      
      <DesktopHeader />

      <div className="flex justify-between items-center w-full md:hidden">
        <MobileHeader />
      </div>
    </div>
  );
};

// return (
//   <div className="relative flex justify-between items-center px-5 mt-4 mb-6">
//     {/*MD UYD GARCH LOGO*/}
//     <div className="hidden md:flex items-center  text-indigo-700">
//       <Link href={"/"}>
//         <div className="flex gap-2 items-center">
//           <FilmIcon />
//           <p className="text-base">
//             <b>
//               <i>Movie Z</i>
//             </b>
//           </p>
//         </div>
//       </Link>
//     </div>

//     {/*Md UI GENRE*/}
//     <div className="hidden gap-3 md:flex">
//       <Genre />
//       <Button variant="outline">
//         <SearchValue />
//       </Button>
//     </div>

//     {/*MD UI Toggle*/}
//     <div className="hidden md:block">
//       <ModeToggle />
//     </div>

//     {/*Phone*/}
//     <div className="flex justify-between items-center w-full md:hidden">
//       {/*State F uyd garah LOGO*/}
//       {!searchBtn && (
//         <div className="flex items-center  text-indigo-700  ">
//           <Link href={"/"}>
//             <div className="flex items-center gap-2">
//               <FilmIcon />
//               <p className="text-base">
//                 <b>
//                   <i>Movie Z</i>
//                 </b>
//               </p>
//             </div>
//           </Link>
//         </div>
//       )}

//       {/*Mobile UI False SearchBtn & Theme*/}
//       {!searchBtn && (
//         <div className="flex gap-3 ">
//           {/* Mobile UI - Search towch haragdah uyd (searchBtn === false) */}

//           <Button variant="outline" onClick={() => setSearchBtn(true)}>
//             <Search />
//           </Button>

//           <ModeToggle />
//         </div>
//       )}

//       {/*Mobie UI True*/}
//       {searchBtn && (
//         <div className="flex  items-center w-full  justify-between">
//           {/*SearchInput ba genre heseg state T uyd ajilna*/}
//           <div className="flex items-center gap-[10%]">
//             <Genre searchBtn={searchBtn} />
//             <SearchValue />
//           </div>

//           {/*"X" btn*/}
//           <div className="" onClick={() => setSearchBtn(false)}>
//             <X className="w-[16px], h-[16px]" />
//           </div>
//         </div>
//       )}
//     </div>

//   </div>
// );
