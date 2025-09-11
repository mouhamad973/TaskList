export interface AddTaskProps {
  task: string;
  setTask: (task: string) => void;
  handleCreateTask: () => void;
}
export interface ITasks {
  _id: string;
  task: string;
  completed: boolean;
}
