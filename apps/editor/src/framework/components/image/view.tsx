import React from "react";
import {
  Image,
  ImageProps
} from "@chakra-ui/react";

export const ImageView: React.FC<ImageProps> = React.memo((props) => {

  return (
    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' {...props} />
  );
});