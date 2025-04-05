"use client";

import { Course } from "../../../app/Types/course";
import {
  CardFavorite,
  CardHighlight,
  CardTag,
  CardTagContainer,
  CardTagText,
  CoursesHeader,
} from "../CourseList/courses.styles";
import {
  FavoriteContainer,
  FavoriteMessage,
  FavoriteSection,
  FavotiresIcon,
} from "./favorite-courses.style";
import HeartSearch from "../Icons/Heart-search";
import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardImage,
  CardTextContainer,
  CardTitle,
} from "../CourseList/courses.styles";
import { CardButton } from "../Button/button.styles";
import { FavoriteButton } from "../FavoriteButton/favorite-button";
import Fire from "../Icons/Fire";

interface FavoriteCoursesProps {
  courses: Course[];
  toggleFavorite: (courseId: number) => void;
}

export default function FavoriteCourses({
  courses,
  toggleFavorite,
}: FavoriteCoursesProps) {
  const favoriteCourses = courses.filter((course) => course.isFavorite);

  return (
    <>
      <CoursesHeader>Meus Favoritos</CoursesHeader>
      <FavoriteSection>
        {favoriteCourses.length > 0 ? (
          <CardContainer>
            {favoriteCourses.map((course) => (
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
                    <CardDescription>
                      {course.short_description}
                    </CardDescription>
                  </CardTextContainer>
                  <CardButton>Acessar</CardButton>
                </CardContent>
              </Card>
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
