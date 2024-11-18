'use client'

import CoursesSection from "../(home)/sections/courses-section";
import { Courses } from "./courses-data";

function CoursesPage() {
  
  return (
    <>
      <CoursesSection isDisplayViewAllButton={false} courses={Courses} />
    </>
  );
}

export default CoursesPage;
