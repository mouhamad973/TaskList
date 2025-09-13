"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import { ITasks } from "./types";
import NoTask from "./components/NoTask";
import Task from "./components/Task";

export default function Home() {
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);
  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: task,
        }),
      });
      if (response.ok) {
        setTask("");
        fetchTasks();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/task/all");
      const data = await response.json();
      setAllTasks(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAllTasks((prevTasks) =>
          prevTasks.filter((task: ITasks) => task._id !== id)
        );
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCompletedTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/complete/${id}`, {
        method: "PATCH",
      });
      if (response.ok) {
        await fetchTasks();
      } else {
        console.log("Error completing task");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
      {isLoading ? (
        <span className="loading loading-infinity loading-xl"></span>
      ) : (
        <>
          <div>
            {allTasks.length > 0 ? (
              allTasks.map((individualTask: ITasks) => (
                <Task
                  key={individualTask._id}
                  individualTask={individualTask}
                  handleCompletedTask={handleCompletedTask}
                  handleDeleteTask={handleDeleteTask}
                />
              ))
            ) : (
              <NoTask />
            )}
          </div>
        </>
      )}
    </>
  );
}
