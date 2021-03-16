import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (active.length >= 2) {
    active.sort((a, b) => a.text.localeCompare(b.text));
  }

  if (done.length >= 2) {
    done.sort((a, b) => b.finishDate - a.finishDate);
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="activeTask">
        <h1>Tasks</h1>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p>No tasks, you should be happy!</p>
        )}
      </div>

      <div className="completedTasks">
        <h1>
          Completed tasks <em>({done.length})</em>
        </h1>
        {done.length > 5 && <p className="five">Last five completed tasks</p>}

        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
