import { useState } from "react";
import Input from "../components/input";
import { Button } from "../components/button";

const DragAndDrop = () => {
  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState<Array<string>>([]);

  const handleClick = () => {
    setTaskList([...taskList, input]);
    setInput("");
    console.log(taskList);
  };

  const tabs = ["All", "Pending", "Complete"];

  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="my-5 flex gap-3 items-center">
        <Input
          placeholder="To-do list"
          type={"text"}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button text="Button" onClick={handleClick} />
      </div>
      <Task title={tabs} taskList={taskList} />
    </div>
  );
};

interface TaskProps {
  title: Array<string>;
  taskList: Array<string>;
}

const Task = ({ title, taskList }: TaskProps) => {
  const [dragging, setDragging] = useState(false);
  const [draggedItem, setDraggedItem] = useState("");
  return (
    <>
      <div className="flex gap-20">
        {title.map((item, index) => (
          <>
            <h2
              className="bg-gray-50  border-2 rounded-xl shadow-sm w-full text-gray-700 text-center font-bold px-1 pb-2"
              key={index}
            >
              {item}
              {item === "All" ? (
                taskList?.map((task: string) => (
                  <div
                    className="mt-2"
                    draggable
                    onDragStart={(e) => {
                      setDragging(true);
                      setDraggedItem(task);
                      e.dataTransfer.setData(
                        "text/plain",
                        JSON.stringify(task)
                      );
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();

                      const droppedItem = JSON.parse(
                        e.dataTransfer.getData("text/plain")
                      );
                      console.log(droppedItem);
                      setDragging(false);
                    }}
                  >
                    <ul className="text-start px-5 py-1 font-medium text-gray-500 list-disc bg-gray-50 border-2 rounded-lg hover:border-indigo-400 ">
                      <li>{task}</li>
                    </ul>
                  </div>
                ))
              ) : (
                <div
                  className="mt-2"
                  draggable
                  onDragStart={(e) => {
                    setDragging(true);
                    // setDraggedItem(task);
                    // e.dataTransfer.setData("text/plain", JSON.stringify(task));
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();

                    const droppedItem = JSON.parse(
                      e.dataTransfer.getData("text/plain")
                    );
                    console.log(droppedItem);
                    setDragging(false);
                  }}
                >
                  <ul className="text-start px-5 py-1 font-medium text-gray-500 list-disc bg-gray-50 border-2 rounded-lg hover:border-indigo-400 ">
                    <li></li>
                  </ul>
                </div>
              )}
            </h2>
          </>
        ))}
      </div>
    </>
  );
};

export default DragAndDrop;
