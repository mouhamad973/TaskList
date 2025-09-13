import { CheckCheck, CircleCheck, Trash } from "lucide-react";
import { TaskProps } from "../types";

const Task = ({
  individualTask,
  handleCompletedTask,
  handleDeleteTask,
}: TaskProps) => {
  return (
    <div className="flex justify-between border border-gray-700 mx-4 px-3 rounded-2xl mt-3">
      <div className="flex w-full ">
        {individualTask.completed ? (
          <p
            className="line-through mx-5
"
          >
            {individualTask.task}
          </p>
        ) : (
          <p
            className="
"
          >
            {individualTask.task}
          </p>
        )}
      </div>
      <div className="mx-4">
        {individualTask.completed ? (
          <CheckCheck color="green" />
        ) : (
          <CircleCheck
            onClick={() => handleCompletedTask(individualTask._id)}
            className="cursor-pointer"
          />
        )}
      </div>
      <Trash
        color="red"
        className="cursor-pointer"
        onClick={() => handleDeleteTask(individualTask._id)}
      />
    </div>
  );
};

export default Task;
