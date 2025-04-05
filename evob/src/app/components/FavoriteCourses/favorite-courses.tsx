"use client";

import { Course } from "../../../app/Types/course";
import {
  FavoriteContainer,
  FavoriteMessage,
  FavoriteSection,
  FavotiresIcon,
} from "./favorite-courses.style";
import HeartSearch from "../Icons/Heart-search";
import { CardContainer, CoursesHeader } from "../CourseList/courses.styles";
import CourseCard from "../CourseList/CourseCard/course-card";

interface FavoriteCoursesProps {
  courses: Course[];
  toggleFavorite: (courseId: number) => void;
}

export default function FavoriteCourses({
  courses,
  toggleFavorite,
}: FavoriteCoursesProps) {
  return (
    <>
      <CoursesHeader>Meus Favoritos</CoursesHeader>
      <FavoriteSection>
        {courses.length > 0 ? (
          <CardContainer>
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                toggleFavorite={toggleFavorite}
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
