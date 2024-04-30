import SideBar from "@/components/ui/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-12 border border-t-2">
      <div className="sidebar col-start-1 col-end-3 bg-blue-200 h-[100vh] ">
        <SideBar />
      </div>
      <div className="content col-start-3">list</div>
    </div>
  );
};

export default page;
