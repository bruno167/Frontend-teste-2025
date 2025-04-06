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
import { useState } from "react";
import { Alert } from "../../Alerts/alert";

interface CourseCardProps {
  course: Course;
  toggleFavorite?: (courseId: Course) => void;
}

export default function CourseCard({
  course,
  toggleFavorite,
}: CourseCardProps) {
  const router = useRouter();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleClick = () => {
    router.push(`/courses/${course.slug}`);
  };

  const handleFavoriteClick = () => {
    if (toggleFavorite) {
      toggleFavorite(course);
      setAlertMessage(
        course.isFavorite
          ? "Curso removido dos favoritos."
          : "Curso adicionado aos favoritos!"
      );

      setTimeout(() => {
        setAlertMessage(null);
      }, 2000);
    }
  };

  return (
    <Card>
      <CardImage thumbnail={course.thumbnail}>
        {alertMessage && (
          <Alert
            message={alertMessage}
            type="success"
            onClose={() => setAlertMessage(null)}
          />
        )}
        <CardFavorite>
          <FavoriteButton
            isFavorite={course.isFavorite}
            toggleFavorite={handleFavoriteClick}
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
