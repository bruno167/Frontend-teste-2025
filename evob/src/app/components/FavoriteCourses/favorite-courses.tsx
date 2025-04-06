"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import {
  FavoriteContainer,
  FavoriteMessage,
  FavoriteSection,
  FavotiresIcon,
} from "./favorite-courses.style";
import HeartSearch from "../Icons/Heart-search";
import { CardContainer, CoursesHeader } from "../CourseList/courses.styles";
import CourseCard from "../CourseList/CourseCard/course-card";

export default function FavoriteCourses() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <>
      <CoursesHeader>Meus Favoritos</CoursesHeader>
      <FavoriteSection>
        {favorites.length > 0 ? (
          <CardContainer>
            {favorites.map((course) => (
              <CourseCard
                key={course.id}
                course={{
                  ...course,
                  isFavorite: true,
                }}
                toggleFavorite={() => toggleFavorite(course)}
              />
            ))}
          </CardContainer>
        ) : (
          <FavoriteContainer>
            <FavotiresIcon>
              <HeartSearch />
            </FavotiresIcon>
            <FavoriteMessage>
              Parece que você ainda não tem cursos favoritados
            </FavoriteMessage>
          </FavoriteContainer>
        )}
      </FavoriteSection>
    </>
  );
}
