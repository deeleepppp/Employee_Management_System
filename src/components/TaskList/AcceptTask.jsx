import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return (
         <div className='h-48 flex-shrink-0 p-5 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 font-semibold text-xl'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description
            }</p>
            <div className='mt-4 flex justify-between'>
             <button className='rounded bg-blue-500 py-1 px-2 text-sm'>Mark as Completed</button>
             <button  className='rounded bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
       
        </div>
     
  )
}

export default AcceptTask