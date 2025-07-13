import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

type ImageProps = {
  src: string;
  alt: string;
};

export const ImageDetailPoster = ({ src, alt }: ImageProps) => {
  return (
    <div  className="hidden md:block w-1/5  object-cover rounded-sm">
      <AsyncImage
        src={src}
        alt={alt}
        // style={{ width: "100%", height: "auto", aspectRatio: 2.76/1,md:"", objectFit: "cover"}}
       className="object-cover h-full w-full"
        Transition={Blur}
      />
    </div>
  );
};

export const ImageDetailCarousel = ({ src, alt }: ImageProps) => {
  return (
    <AsyncImage
      src={src}
      alt={alt}
      // style={{ width: "100%", height: "auto", aspectRatio: 2.76/1,md:"", objectFit: "cover"}}
      className="w-screen  md:w-4/5 aspect-[2.76/1] object-cover rounded-sm "
      Transition={Blur}
    />
  );
};
