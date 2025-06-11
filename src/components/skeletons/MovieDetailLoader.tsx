export const DetailLoader = () => {
  return (
    <div className="w-[90%] mx-auto">
      <DetailRating />
    </div>
  );
};

const DetailRating = () => {
  return (
    //
    <div
      role="status"
      className="w-full  space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700  dark:border-gray-700"
    >
      <div className="flex items-center justify-between">

        <div>
          <div className="h-10 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div className="w-32 h-7 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>

        <div>
          <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-700 w-12 md:w-[83px]"></div>
          <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-700 w-12 md:w-[83px] mt-1"></div>
        </div>

      </div>
    </div>
  );
};