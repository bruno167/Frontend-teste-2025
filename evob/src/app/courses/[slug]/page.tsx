import CourseDetails from "@/app/components/CourseList/CoursePage/courses-page";
import ShareButton from "@/app/components/Shared/share-button";
import { getCourseDetails } from "@/Services/courses-slug";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type CourseProps = {
  params: Promise<{ slug: string }>;
};

const courseCache = new Map<
  string,
  Awaited<ReturnType<typeof getCourseDetails>>
>();

export async function generateMetadata(
  { params }: CourseProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  if (!courseCache.has(slug)) {
    const course = await getCourseDetails(slug);
    courseCache.set(slug, course);
  }

  const course = courseCache.get(slug)!;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: course.title,
    openGraph: {
      images: [course.thumbnail, ...previousImages],
    },
  };
}

export default async function CoursePage({ params }: CourseProps) {
  const { slug } = await params;

  let course = courseCache.get(slug);
  if (!course) {
    try {
      course = await getCourseDetails(slug);
    } catch (error) {
      console.error("Erro ao buscar detalhes do curso:", error);
      return notFound();
    }
  }

  return (
    <>
      {course && <CourseDetails course={course} />}
      <ShareButton />
    </>
  );
}
