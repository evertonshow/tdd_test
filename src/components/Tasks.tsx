import { useState } from "react";
import Button from "./Button";
import axios from "axios";

interface TasksProp {
  id: string;
  title: string;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<TasksProp[]>([]);
  const [errorMessage, setErrorMessage] = useState<null | String>(null);

  const handleClick = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTasks(data);
    } catch (error: any) {
      setErrorMessage(error?.message);
    }
  };

  return (
    <>
      <h1>Tasks From API</h1>
      <Button disabled={false} onClick={handleClick}>
        Get tasks from API
      </Button>

      {tasks.length > 0
        ? tasks.map(task => <p key={task.id}>{task.title}</p>)
        : errorMessage}
    </>
  );
}
