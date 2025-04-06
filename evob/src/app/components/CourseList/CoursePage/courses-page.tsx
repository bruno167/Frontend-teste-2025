"use client";

import DOMPurify from "dompurify";
import { useFavorites } from "@/contexts/FavoritesContext"; // Consome o contexto
import { Course } from "@/app/Types/course";
import {
  ButtonContainer,
  CoursesBanner,
  DetailsContainer,
  DetailsDescription,
  DetailsTitle,
  MenuContainer,
  PageFavoriteButton,
  StyledCoursePage,
} from "./couses-page.style";
import HeartFill from "../../Icons/Heart-fill";
import Heart from "../../Icons/Heart";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

interface CourseDetailsProps {
  course: Course;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === course.id);
  const [cleanHTML, setCleanHTML] = useState("");

  useEffect(() => {
    setCleanHTML(DOMPurify.sanitize(course.long_description));
  }, [course.long_description]);

  return (
    <StyledCoursePage>
      <CoursesBanner
        $srcdesktop={course.banner}
        $srcmobile={course.banner_mobile}
      />
      <MenuContainer>
        <ButtonContainer>
          <PageFavoriteButton onClick={() => toggleFavorite(course)}>
            {isFavorite ? (
              <HeartFill width={12} height={12} color="currentColor" />
            ) : (
              <Heart width={12} height={12} color="currentColor" fill="#fff" />
            )}
            {isFavorite ? "Desfavoritar" : "Favoritar"}
          </PageFavoriteButton>
        </ButtonContainer>
        <DetailsContainer>
          <DetailsTitle>{course.title}</DetailsTitle>
          <DetailsDescription
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: cleanHTML }}
          />
        </DetailsContainer>
      </MenuContainer>
    </StyledCoursePage>
  );
}
