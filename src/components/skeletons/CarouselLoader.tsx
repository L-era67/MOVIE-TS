export const CarouselLoader = () => {
  return (
    <div className="w-full">
      <div className="w-full border border-gray-200 rounded-sm shadow-sm animate-pulse dark:border-gray-700 ">
        <div className="flex h-[246px] md:h-[600px] items-center justify-center bg-gray-300 rounded-sm dark:bg-gray-700 ">
          <svg
            className="text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          ></svg>
        </div>
      </div>

      <div
        role="status"
        className="space-y-2.5 animate-pulse p-5 w-full block md:hidden"
      >
        <div className="flex items-start justify-between w-full mb-4">
          <div className="flex flex-col items-start justify-between w-full gap-1">
            <div className="h-[18px] bg-gray-200 rounded-full dark:bg-gray-700 w-[101px]"></div>
            <div className="h-[30px] bg-gray-300 rounded-full dark:bg-gray-600 w-[101px]"></div>
          </div>

            <div className="h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 w-[101px]"></div>
        
        </div>

        <div className="h-[20px] bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-[20px] bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-[20px] bg-gray-300 rounded-full dark:bg-gray-600 w-11/12 "></div>
        <div className="h-[20px] bg-gray-300 rounded-full dark:bg-gray-600 w-6/7 "></div>

        
        <div className="h-[40px] bg-gray-300 rounded-full dark:bg-gray-600 w-1/5 "></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
