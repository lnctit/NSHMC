import React from "react";
import DepartmentCard from "../components/DepartmentCard/DepartmentCard";

export default function page() {
  return (
    <>
      <div className=" grid grid-cols-3 mb-10">
        <DepartmentCard
          image="/departmentcard/body.webp"
          heading="Department of Anatomy"
        />
        <DepartmentCard
          image="/departmentcard/micro.jpg"
          heading="Department of Anatomy"
        />
        <DepartmentCard
          image="/departmentcard/body.webp"
          heading="Department of Anatomy"
        />
        <DepartmentCard
          image="/departmentcard/body.webp"
          heading="Department of Anatomy"
        />
        <DepartmentCard
          image="/departmentcard/body.webp"
          heading="Department of Anatomy"
        />
        <DepartmentCard
          image="/departmentcard/body.webp"
          heading="Department of Anatomy"
        />
      </div>
    </>
  );
}
