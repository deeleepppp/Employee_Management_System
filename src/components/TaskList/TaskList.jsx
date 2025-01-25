import React from 'react'

function TaskList() {
  return (
    <div id='tasklist' className=' flex items-center justify-start overflow-x-auto gap-5 flex-nowrap h-[55%] w-full  mt-10 py-5'>
        <div className='h-full flex-shrink-0 p-5 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 font-semibold text-2xl'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, excepturi. Hic cum nihil delectus repellat.</p>
        </div>
        <div className='h-full flex-shrink-0 p-5 w-[300px] bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 font-semibold text-2xl'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, excepturi. Hic cum nihil delectus repellat.</p>
        </div>
        <div className='h-full flex-shrink-0 p-5 w-[300px] bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 font-semibold text-2xl'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, excepturi. Hic cum nihil delectus repellat.</p>
        </div>
        <div className='h-full flex-shrink-0 p-5 w-[300px] bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 font-semibold text-2xl'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, excepturi. Hic cum nihil delectus repellat.</p>
        </div>
        
    </div>
  )
}

export default TaskList