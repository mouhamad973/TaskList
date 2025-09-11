import { SquarePlus } from "lucide-react";
import { AddTaskProps } from "../types";

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
  return (
    <div>
      <div className="pt-4 pl-2 pr-2 pb-1 w-full">
        <label className="input w-full mt-4 ">
          <input
            type="text"
            placeholder="Nouvelle Tache ..."
            className="grow "
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <SquarePlus
            className="cursor-pointer hover:text-orange-500 focus:text-orange-500"
            size={40}
            strokeWidth={0.5}
            onClick={handleCreateTask}
          />
        </label>
      </div>
    </div>
  );
};

export default AddTask;
