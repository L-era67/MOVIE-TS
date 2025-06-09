import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

type ImageProps ={
    src:string;
    alt:string;
}

export const Image = ({ src, alt }:ImageProps) => {
  return (
    <AsyncImage
      src={src}
      alt={alt}
      style={{ width: "100%", height: "auto", aspectRatio: 3/4, objectFit: "cover"}} 
      Transition={Blur}
    />
  );
};