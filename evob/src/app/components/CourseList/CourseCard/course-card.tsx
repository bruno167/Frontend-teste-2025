"use client";

import { Course } from "@/app/Types/course";
import {
  Card,
  CardImage,
  CardFavorite,
  CardTagContainer,
  CardHighlight,
  CardTag,
  CardTagText,
  CardContent,
  CardTextContainer,
  CardTitle,
  CardDescription,
} from "../courses.styles";
import { CardButton } from "../../Button/button.styles";
import { FavoriteButton } from "../../FavoriteButton/favorite-button";
import Fire from "../../Icons/Fire";
import { useRouter } from "next/navigation";

interface CourseCardProps {
  course: Course;
  toggleFavorite?: (courseId: number) => void;
}

export default function CourseCard({
  course,
  toggleFavorite,
}: CourseCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/course/${course.id}`);
  };

  return (
    <Card>
      <CardImage thumbnail={course.thumbnail}>
        <CardFavorite>
          <FavoriteButton
            isFavorite={course.isFavorite || false}
            toggleFavorite={
              toggleFavorite ? () => toggleFavorite(course.id) : () => {}
            }
          />
        </CardFavorite>
        {Object.values(course.settings.course_types).some((type) => type) && (
          <CardTagContainer>
            <CardHighlight>
              <Fire />
            </CardHighlight>
            <CardTag>
              {(
                ["live", "online", "presential"] as Array<
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
        <CardButton onClick={handleClick}>Acessar</CardButton>
      </CardContent>
    </Card>
  );
}
