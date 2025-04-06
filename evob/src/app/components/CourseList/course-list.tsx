"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import { Course } from "@/app/Types/course";
import { CoursesHeader, CardContainer } from "./courses.styles";
import CourseCard from "./CourseCard/course-card";
import FavoriteCourses from "../FavoriteCourses/favorite-courses";

interface CoursesProps {
  courses: Course[];
}

export default function Courses({ courses }: CoursesProps) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <>
      <CoursesHeader>Meus Cursos</CoursesHeader>
      <CardContainer>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={{
              ...course,
              isFavorite: favorites.some((fav) => fav.id === course.id),
            }}
            toggleFavorite={() => toggleFavorite(course)}
          />
        ))}
      </CardContainer>
      <FavoriteCourses />
    </>
  );
}
