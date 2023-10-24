import toast from 'react-hot-toast'
import { deleteMemory } from '../api/memories'
import { useMutation, useQueryClient } from '@tanstack/react-query'

/* eslint-disable react/prop-types */
const MemoryCard = ({ memory }) => {
  const queryClient = useQueryClient()
  const { mutateAsync: deleteMemoryMutation } = useMutation({
    mutationFn: deleteMemory,
    onSuccess: () => {
      queryClient.invalidateQueries('memories')
    },
  })

  const handleDelete = async () => {
    try {
      await deleteMemoryMutation(memory._id)
      toast.success('Memory Delete Successful🔥')
    } catch (err) {
      toast.error('Something went wrong! Try again😰')
      console.log(err)
    }
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
