import Banners from "./components/Banner/banner";
import CoursesCard from "./components/CourseList/courses";
import FavoriteCourses from "./components/FavoriteCourses/favorite-courses";

export default async function Home() {
  return (
    <main>
      <Banners />
      <div>
        <CoursesCard />
        <FavoriteCourses />
      </div>
    </main>
  );
}
