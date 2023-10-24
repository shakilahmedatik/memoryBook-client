import { useState } from 'react'
import { addMemories } from '../api/memories'
import memoryJPG from '../assets/memory.jpg'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const MemoryForm = () => {
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState({
    title: '',
    description: '',
  })
  const handleSubmit = e => {
    e.preventDefault()
    if (formValue.description.length < 34)
      return toast.error('Description is too short😰')
    addMemories(formValue)
      .then(data => {
        toast.success('Memory Saved🔥')
        setFormValue({ title: '', description: '' })
        console.log(data)
        navigate('/memories')
      })
      .catch(err => {
        toast.error('Something went wrong! Try again😰')
        console.log(err)
      })
  }
  return (
    <div className='flex flex-wrap w-full'>
      <div className='flex flex-col w-full md:w-1/2'>
        <div className='flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32'>
          <form onSubmit={handleSubmit} className='flex flex-col pt-3 md:pt-8'>
            <div className='flex flex-col pt-4'>
              <input
                value={formValue.title}
                onChange={e =>
                  setFormValue({ ...formValue, title: e.target.value })
                }
                type='text'
                className='rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                placeholder='Title'
                required
              />
            </div>
            <div className='flex flex-col pt-4 mb-6'>
              <textarea
                value={formValue.description}
                onChange={e =>
                  setFormValue({ ...formValue, description: e.target.value })
                }
                className='rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                placeholder='Description'
                required
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Save
            </button>
          </form>
        </div>
      </div>

      <div className='w-1/2 shadow-2xl'>
        <img
          className='hidden object-cover w-full h-[calc(100vh-120px)] md:block'
          src={memoryJPG}
        />
      </div>
    </div>
  )
}

export default MemoryForm
