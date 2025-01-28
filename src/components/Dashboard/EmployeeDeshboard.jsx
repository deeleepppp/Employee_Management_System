import React from "react";
import Header from "../other/Header";
import TasksListNumbers from "../other/TasksListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDeshboard({data}) {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header  data={data}/>
      <TasksListNumbers  data={data}/>
      <TaskList data={data}/>
    </div>
  );
}

export default EmployeeDeshboard;
