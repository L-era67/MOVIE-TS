import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

type ImageProps ={
    src:string;
    alt:string;
}

export const ImageCarousel = ({ src, alt }:ImageProps) => {
  return (
    <AsyncImage
      src={src}
      alt={alt}
      // style={{ width: "100%", height: "auto", aspectRatio: 2.76/1,md:"", objectFit: "cover"}} 
      className="w-full h-auto aspect-[5/3] md:aspect-[16/9] lg:aspect-[2.39/1] xl:aspect-[2.76/1] object-cover"
      Transition={Blur}
    />
  );
};