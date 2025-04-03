import { getCourses } from "../../../Services/courses";
import { Course } from "../../../app/Types/course";
import CourseList from "./course-list";

export default async function CoursesPage() {
  const course: Course[] = await getCourses();

  return <CourseList courses={course} />;
}
