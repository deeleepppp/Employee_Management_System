import React from "react";

function TasksListNumbers() {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="px-9 py-6 rounded-xl w-[45%] bg-blue-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-green-400">
        <h2 className="text-3xl font-semibold">3</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-yellow-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-red-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TasksListNumbers;