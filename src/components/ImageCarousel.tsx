import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { ImageAsset } from '../types/product';

type Props = { assets: ImageAsset[] };

const Image = styled.Image`
  width: 100%;
  aspect-ratio: 1;
`;

const ImageCarousel = ({ assets }: Props) => {
  const primaryImageUrl = assets.find((asset) => asset.primary)?.url;


  return (
    <Image
      source={{ uri: primaryImageUrl || assets[0].url}}
    />
  );
};

export default ImageCarousel;