import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";

const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const PhotoAlbum = ({ photos = [], theme }) => {
  return (
    <AlbumContainer>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} theme={theme} />
      ))}
    </AlbumContainer>
  );
};

export default PhotoAlbum;
