"use client";

import { Course } from "../../../app/Types/course";
import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardFavorite,
  CardFavoriteButton,
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
import Heart from "../Icons/Heart";
import Fire from "../Icons/Fire";
import HeartFill from "../Icons/Heart-fill";

interface CourseListProps {
  courses: Course[];
}

export default function Courses({ courses }: CourseListProps) {
  if (!courses || courses.length === 0) {
    return <div>Nenhum curso disponível no momento.</div>;
  }

  function useCourseTags(courseTypes: {
    live: boolean;
    online: boolean;
    presential: boolean;
  }) {
    const tags = [
      { type: "live", label: "Ao vivo" },
      { type: "online", label: "Online" },
      { type: "presential", label: "Presencial" },
    ];
  }

  return (
    <>
      <CoursesHeader>Meus Cursos</CoursesHeader>
      <CardContainer>
        {courses.map((course) => (
          <Card key={course.id}>
            <CardImage thumbnail={course.thumbnail}>
              <CardFavorite>
                <CardFavoriteButton>
                  <HeartFill />
                </CardFavoriteButton>
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
    </>
  );
}
