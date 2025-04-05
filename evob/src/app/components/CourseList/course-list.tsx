"use client";

import { useEffect, useState } from "react";
import { Course } from "../../../app/Types/course";
import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardFavorite,
  CardHighlight,
  CardImage,
  CardTag,
  CardTagContainer,
  CardTagText,
  CardTextContainer,
  CardTitle,
  CoursesHeader,
} from "./courses.styles";
import { CardButton } from "../Button/button.styles";
import { FavoriteButton } from "../FavoriteButton/favorite-button";
import FavoriteCourses from "../FavoriteCourses/favorite-courses";
import { FavoriteSection } from "../FavoriteCourses/favorite-courses.style";
import Fire from "../Icons/Fire";

interface CourseListProps {
  courses: Course[];
}

export default function Courses({ courses }: CourseListProps) {
  const [cachedCourses, setCachedCourses] = useState<Course[]>([]);

  useEffect(() => {
    const cached = localStorage.getItem("cachedCourses");
    if (cached) {
      setCachedCourses(JSON.parse(cached));
    } else if (courses.length > 0) {
      localStorage.setItem("cachedCourses", JSON.stringify(courses));
      setCachedCourses(courses);
    }
  }, [courses]);

  // Alternar o estado de favorito
  const toggleFavorite = (courseId: number) => {
    const updatedCourses = cachedCourses.map((course) =>
      course.id === courseId
        ? { ...course, isFavorite: !course.isFavorite }
        : course
    );

    setCachedCourses(updatedCourses);
    localStorage.setItem("cachedCourses", JSON.stringify(updatedCourses));
  };

  return (
    <>
      <CoursesHeader>Meus Cursos</CoursesHeader>
      <CardContainer>
        {cachedCourses.map((course) => (
          <Card key={course.id}>
            <CardImage thumbnail={course.thumbnail}>
              <CardFavorite>
                <FavoriteButton
                  isFavorite={course.isFavorite || false}
                  toggleFavorite={() => toggleFavorite(course.id)}
                />
              </CardFavorite>
              {Object.values(course.settings.course_types).some(
                (type) => type
              ) && (
                <CardTagContainer>
                  <CardHighlight>
                    <Fire />
                  </CardHighlight>
                  <CardTag>
                    {(
                      ["live", "online"] as Array<
                        keyof typeof course.settings.course_types
                      >
                    ).map((type) =>
                      course.settings.course_types[type] ? (
                        <CardTagText key={type}>
                          {type === "live" && "Ao vivo"}
                          {type === "online" && "Online"}
                          {type === "presential" && "Presencial"}
                        </CardTagText>
                      ) : null
                    )}
                  </CardTag>
                </CardTagContainer>
              )}
            </CardImage>
            <CardContent>
              <CardTextContainer>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.short_description}</CardDescription>
              </CardTextContainer>
              <CardButton>Acessar</CardButton>
            </CardContent>
          </Card>
        ))}
      </CardContainer>
      <FavoriteSection>
        <FavoriteCourses
          courses={cachedCourses}
          toggleFavorite={toggleFavorite}
        />
      </FavoriteSection>
    </>
  );
}
