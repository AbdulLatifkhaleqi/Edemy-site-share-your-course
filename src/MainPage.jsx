import Courses from './pages/Courses';
import Learn from './pages/Learn';
import Main from './pages/main';
import Testimonials from './pages/Testimonials';

function MainPage() {
  return (
    <div className=" w-full">
      <Main />
      <Courses />
      <Testimonials />
      <Learn />
    </div>
  );
}

export default MainPage;
