import React ,{ useState } from "react"
function ToDolist(){

  const [tasks,setTasks] = useState([]);
  const [newTask,setNewtask] = useState("");
  
  function handleInputChange(event){
    setNewtask(event.target.value);
  }

  function addTask(){
    if(newTask.trim()!==""){
      setTasks(t =>[...t,newTask])
      setNewtask("")
    }
    
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  }
  function removeTask(index){
    const updateTasks = tasks.filter((_,i) => i!== index)
    setTasks(updateTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }


  return( <div className="to-do-list">
    <h1>To-Do-List</h1>
    <div>
      <input type="text" placeholder="Enter a task..." value={newTask}
       onChange={handleInputChange}  onKeyDown={handleKeyDown} />
      <button className="addButton" onClick={addTask}>Add</button>
    </div>
    <ol>
      {tasks.map((task,index)=>
      <li key={index}> 
      <span className="text">{task}</span>
      <button
      className="deleteButton" onClick={() =>removeTask(index)}>Delete</button>
      <button
      className="moveButton" onClick={() =>moveTaskUp(index)}>☝️</button>
       <button
      className="moveButton" onClick={() =>moveTaskDown(index)}>👇</button>
      </li>)}
    </ol>
  </div>)
}
export default ToDolist