import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  return (
    <div id='tasklist' className=' flex items-center justify-start overflow-x-auto gap-5 flex-nowrap h-[55%] w-full  mt-10 py-5'>
       {data.tasks.map((e,i)=>{
       if(e.active){
        return <AcceptTask data={e} key={i}/>
       }
       if(e.newTask){
        return <NewTask data={e} key={i}/>
       }
       if(e.completed){
        return <CompleteTask data={e} key={i}/>
       }
       if(e.failed){
        return <FailedTask data={e} key={i}/>
       }
       })}
        
    </div>
  )
}

export default TaskList