"use client";
import SideBar from "@/components/ui/SideBar";
import React from "react";
import data from "../../../public/data/taskList.json";
import { Table } from "antd";
import { useQuery } from "@tanstack/react-query";
const page = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://6630d68ec92f351c03db460e.mockapi.io/task").then(res =>
        res.json()
      ),
  });
  console.log(data);
  return (
    <div className="grid grid-cols-12 border border-t-2">
      <div className="sidebar col-start-1 col-end-3 bg-blue-200 h-[100vh] ">
        <SideBar />
      </div>
      <div className="content col-start-3 col-end-12">list</div>
    </div>
  );
};

export default page;
