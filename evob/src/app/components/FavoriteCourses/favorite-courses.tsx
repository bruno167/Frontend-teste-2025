"use client";

import { CoursesHeader } from "../CourseList/courses.styles";
import HeartSearch from "../Icons/Heart-search";
import {
  FavoriteContainer,
  FavoriteMessage,
  FavoriteSection,
  FavotiresIcon,
} from "./favorite-courses.style";

export default function FavoriteCourses() {
  return (
    <>
      <CoursesHeader>Meus Favoritos</CoursesHeader>
      <FavoriteSection>
        <FavoriteContainer>
          <FavotiresIcon>
            <HeartSearch />
          </FavotiresIcon>
          <FavoriteMessage>
            Parece que você ainda não tem cursos favoritados
          </FavoriteMessage>
        </FavoriteContainer>
      </FavoriteSection>
    </>
  );
}
