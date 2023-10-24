import { Link } from 'react-router-dom'

const EmptyState = () => {
  return (
    <div className='flex flex-col m-8 rounded w-60 sm:w-80 animate-pulse h-72'>
      <div className='h-48 rounded-t bg-neutral-content'></div>
      <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-400'>
        <div className='w-full h-6 rounded bg-gray-300'></div>
        <div className='w-full h-6 rounded bg-gray-300'></div>
        <div className='w-3/4 h-6 rounded bg-gray-300'></div>
      </div>

      <p className='pt-4'>No Memories Found 🥺</p>

      <Link className='text-primary' to='/add-memory'>
        Click here to add some..
      </Link>
    </div>
  )
}

export default EmptyState
