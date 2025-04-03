"use client";

import { Course } from "../../../app/Types/course";
import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardImage,
  CardTextContainer,
  CardTitle,
  CoursesHeader,
} from "./courses.styles";
import { CardButton } from "../Button/button.styles";

interface CourseListProps {
  courses: Course[];
}

export default function CourseList({ courses }: CourseListProps) {
  if (!courses || courses.length === 0) {
    return <div>Nenhum curso disponível no momento.</div>;
  }

  return (
    <>
      <CoursesHeader>Meus Cursos</CoursesHeader>
      <CardContainer>
        {courses.map((course) => (
          <Card key={course.id}>
            <CardImage thumbnail={course.thumbnail} />
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
    </>
  );
}
