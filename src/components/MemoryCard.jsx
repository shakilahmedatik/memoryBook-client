import toast from 'react-hot-toast'
import { deleteMemory } from '../api/memories'

/* eslint-disable react/prop-types */
const MemoryCard = ({ memory, memories, setMemories }) => {
  const handleDelete = () => {
    deleteMemory(memory._id)
      .then(data => {
        console.log(data)
        const remaining = memories.filter(mem => mem._id !== memory._id)
        setMemories(remaining)
        toast.success('Memory Delete Successful🔥')
      })
      .catch(err => {
        console.log(err)
        toast.error('Something went wrong! Try again😰')
      })
  }
  return (
    <div className='card w-84 h-48 bg-primary text-primary-content'>
      <div className='card-body'>
        <h2 className='card-title'>{memory.title}</h2>
        <p>{memory.description}</p>
        <div
          onClick={handleDelete}
          className='cursor-pointer absolute -right-3 -top-3'
        >
          <button className='btn btn-secondary'>X</button>
        </div>
      </div>
    </div>
  )
}

export default MemoryCard
