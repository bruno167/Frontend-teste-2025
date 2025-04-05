import Banners from "./components/Banner/banner";
import CoursesCard from "./components/CourseList/courses";
export default function Home() {
  return (
    <main>
      <Banners />
      <div>
        <CoursesCard />
      </div>
    </main>
  );
}
