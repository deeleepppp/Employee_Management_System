import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

function AdminDeshboard() {
  return (
    <div className="p-7 h-screen w-full">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
}

export default AdminDeshboard;
