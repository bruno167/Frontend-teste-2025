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
import { useState } from "react";
import { Alert } from "../Alerts/alert";

export default function FavoriteCourses() {
  const { favorites, toggleFavorite } = useFavorites();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleToggleFavorite = (course: any) => {
    toggleFavorite(course);
    setAlertMessage(
      `Curso "${course.title}" ${
        course.isFavorite ? "adicionado" : "removido"
      } dos favoritos!`
    );

    setTimeout(() => {
      setAlertMessage(null);
    }, 3000);
  };

  return (
    <>
      {alertMessage && (
        <Alert
          message={alertMessage}
          type="success"
          onClose={() => setAlertMessage(null)}
        />
      )}
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
                toggleFavorite={() => handleToggleFavorite(course)}
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
