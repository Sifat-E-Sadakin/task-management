import Link from "next/link";

const SideBar = () => {
  return (
    <div className="sidebar  bg-blue-200 h-[100vh]  ">
      <Link href="/tasklist">All Project</Link>
    </div>
  );
};

export default SideBar;
