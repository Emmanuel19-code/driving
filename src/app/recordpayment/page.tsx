import React from 'react'

const RecordPayment = () => {
  return (
    <div className='max-w-full'>
       <div className="mt-4 ml-72 mr-4   bg-white rounded-lg">
          <h4 className='bg-[#302394] rounded-t-lg p-2 text-white px-4'>Record Payment</h4>
          <div className='p-4'>
            <div>
                 
            </div>
            <div className='flex justify-end space-x-2'>
               <button className='w-32 border-2 py-1 rounded-md border-[#302394] text-[#302394] cursor-pointer'>cancel</button>
               <button className='w-32 border py-1 rounded-md bg-[#302394] text-white cursor-pointer'>Save Payment</button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default RecordPayment
