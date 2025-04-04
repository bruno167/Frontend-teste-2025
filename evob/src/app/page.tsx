import Banners from "./components/Banner/banner";
import CoursesCard from "./components/CourseList/courses";

export default async function Home() {
  return (
    <main>
      <Banners />
      <div>
        <CoursesCard />
      </div>
    </main>
  );
}
