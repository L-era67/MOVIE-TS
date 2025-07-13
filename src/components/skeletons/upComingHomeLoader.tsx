export const MovieCardLoader = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mx-auto md:grid-cols-5 ">
      {new Array(10).fill(null).map((_, index) => (
        <Loader key={index} />
      ))}
    </div>
  );
};

export const SeeMoreLoader = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-8 mx-auto md:grid-cols-5 pt-8">
      {new Array(20).fill(null).map((_, index) => (
        <Loader key={index} />
      ))}
    </div>
  );
};

const Loader = () => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-sm shadow-sm animate-pulse dark:border-gray-700 aspect-3/4">
      <div className="flex items-center justify-center mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
        <svg
          className="text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        ></svg>
      </div>

      <div className="p-[8px] ">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-1/4 "></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      </div>
    </div>
  );
};

export const HomeTitles = () => {
  return (
    // <div className="bg-amber-400">
    //   <p className=" font-semibold text-[24px] dark:text-white w-[145px] md:w-[250px] h-[32px] mt-13 mb-8"></p>
    <div
      role="status"
      className=" animate-pulse flex items-start justify-between w-full mt-13 mb-8"
    >
      <div className="h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 w-[145px] md:w-[250px]"></div>
      <div className="h-[30px] bg-gray-300 rounded-full dark:bg-gray-600 w-[125px] md:w-[165px]"></div>
    </div>

    // </div>
  );
};