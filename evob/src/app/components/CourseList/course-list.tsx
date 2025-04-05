"use client";

import { useEffect, useState } from "react";
import { Course } from "../../../app/Types/course";
import { CoursesHeader, CardContainer } from "./courses.styles";
import CourseCard from "./CourseCard/course-card";
import FavoriteCourses from "../FavoriteCourses/favorite-courses";
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

  const [favoriteCourses, setFavoriteCourses] = useState<Course[]>([]);
  const toggleFavorite = (courseId: number) => {
    const course = cachedCourses.find((c) => c.id === courseId);
    if (!course) return;
    if (favoriteCourses.some((fav) => fav.id === courseId)) {
      setFavoriteCourses((prev) =>
        prev.filter((favCourse) => favCourse.id !== courseId)
      );
    } else {
      setFavoriteCourses((prev) => [...prev, { ...course, isFavorite: true }]);
    }
    const updatedCourses = cachedCourses.map((c) =>
      c.id === courseId ? { ...c, isFavorite: !c.isFavorite } : c
    );
    setCachedCourses(updatedCourses);
    localStorage.setItem("cachedCourses", JSON.stringify(updatedCourses));
  };

  return (
    <>
      <CoursesHeader>Meus Cursos</CoursesHeader>
      <CardContainer>
        {cachedCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </CardContainer>
      <FavoriteCourses
        courses={favoriteCourses}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
}
