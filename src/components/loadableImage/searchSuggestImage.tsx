import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

type ImageProps = {
  src: string;
  alt: string;
};

export const ImageSearchSuggest = ({ src, alt }: ImageProps) => {
  return (
    <div className="w-[80px] h-[100px] rounded-md">
    <AsyncImage
      src={src}
      alt={alt}
      // style={{ width: "100%", height: "auto", aspectRatio: 2.76/1,md:"", objectFit: "cover"}}
      className="w-full h-full"
      Transition={Blur}
    />
    </div>
  );
};
