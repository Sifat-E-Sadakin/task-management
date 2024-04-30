import { Button } from "antd";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <header className="bg-blue-200 py-4">
      <div className="topbar-wrapper flex justify-between items-center container mx-auto">
        <h1>Task management</h1>
        <div className="links-wrapper">
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
