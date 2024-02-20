import React, { useRef, useState } from 'react'
import { Cart } from './Cart'

export const Task = (props) => {
    const [toglle,setToglle]=useState(true);
    const [editToglle,setEditToglle]=useState(false);
    const [todo,setTodo]= useState([])
    const [idEdit,setId]= useState(null)
    const title=useRef()
    const desk=useRef()
    const status=useRef()
    const priority=useRef()
    // echo "# Todo" >> README.md
    // git init
    // git add README.md
    // git commit -m "first commit"
    // git branch -M main
    // git remote add origin https://github.com/baatar2025/Todo.git
    // git push -u origin main

    const statuValues=['Todo','Inprogress','Stuck','Done']
    const levelValues=['Low','Meduim','High']
    function Add(){
        const too=Math.floor(Math.random()*10000)+1;
        let todoValues=todo;
        todoValues.push({task:{title:title.current.value,
            desk:desk.current.value,
            level:priority.current.value,
            status:status.current.value
        },id:too})
        setTodo(todoValues)
       setToglle(true)
    }
    function deleteNote(id){
        const deleteNo=  todo.filter((e)=>e.id!==id)
        setTodo(deleteNo)
    }
    function updateNote(){
    //   const {title,desk,level,status}=todo.filter((e)=>e.id == idEdit)[0].task;
      let editTask=todo.filter((e)=>e.id!==idEdit);
      editTask.push({task:{title:title.current.value,
        desk:desk.current.value,
        level:priority.current.value,
        status:status.current.value
    },id:idEdit})
    setTodo(editTask);
    setToglle(true)
    setEditToglle(false)
    }
    function editNote(card){
        setId(card.id)
        setEditToglle(true)
        title.current.value=card.task.title;
        desk.current.value=card.task.desk;
        status.current.value=card.task.status;
        priority.current.value=card.task.level;
        setToglle(false)
        setEditToglle(true)
    }
    // todo.filter((e)=>e.task.status === 'Todo')
  return (
    <>
    <div>
        <div className={`${toglle?' hidden':'null'} absolute top-[20%] left-[30%] bg-slate-200 w-96 h-fit p-5 rounded`}>
            <div>
                <h1 className='text-2xl font-bold mb-4'>Add Task</h1>
                <label className=' text-gray-600'>Title</label>
                <input type="text" className=' rounded-md border border-gray-600 w-full h-10 mb-4' ref={title} />

                <label className=' text-gray-600'>Desxription</label>
                <input type='text' className=' rounded-md border border-gray-600 w-full h-32 mb-4 flex text-wrap' ref={desk} ></input>

                <label className=' text-gray-600'>Status</label>
                <div>
                    <select className=' w-full rounded p-2 mb-4' ref={status} >
                        {statuValues.map((props)=>{
                            return(
                                <option>{props}</option>
                            )
                        })}
                    </select>
                </div>

                <label>Priority</label>
                <div>
                    <select className='w-full rounded p-2 mb-4' ref={priority} > 
                    {levelValues.map((props)=>{
                            return(
                                <option>{props}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='flex justify-center'>
                <button className="btn btn-outline  w-40" onClick={editToglle?updateNote:Add}>{editToglle?'edit button':'Add Task'}</button>
                </div>
            </div>
        </div>

        <div className=" px-[10%] py-[13%] bg-[url('/img/odtoishono.jpeg')] bg-auto  h-full">
            <div className="p-5 bg-gray-100 border-none rounded-lg  w-10/12 h-fit">
                <div className=" mb-3 flex gap-2">
                    <h1 className=" mb-2">Todo</h1>
                    <span className=" text-gray-400">{todo.length}</span>
                </div>
                   <div>
                        <div>
                            { todo.map((card)=>{
                                return(
                                    <div className=' bg-gray-200 rounded-md border border-none px-10 py-5  mb-5 flex flex-col gap-5 w-fit'>
                                        {
                                            console.log(card.task)
                                        }
                                        <div className='flex gap-5'>
                                            <div>
                                                <h1 className=' mb-2'>{card.task.title}</h1>
                                                <p className=' mb-2'> {card.task.desk}</p>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <button className=' border border-black rounded-full p-1' onClick={()=>deleteNote(card.id)}>delete</button>
                                                <button className=' border border-black rounded-full p-1' onClick={()=>editNote(card)}>edit</button>
                                            </div>
                                        </div>
                                        <div className=' flex justify-center'>
                                            <button className="btn btn-outline  h-10 w-20">{card.task.level}</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            
                        </div>
                   </div>
                
                <div className=" flex justify-center">
                    <button className="btn btn-outline" onClick={()=>setToglle(false)}> add task </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
