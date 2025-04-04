import { CardFavoriteButton } from "../CourseList/courses.styles";
import Heart from "../Icons/Heart";
import HeartFill from "../Icons/Heart-fill";
import React from "react";

interface FavoriteButtonProps {
  isFavorite: boolean;
  toggleFavorite: () => void;
}
export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  toggleFavorite,
}) => {
  return (
    <CardFavoriteButton onClick={toggleFavorite}>
      {isFavorite ? <HeartFill /> : <Heart />}
    </CardFavoriteButton>
  );
};
