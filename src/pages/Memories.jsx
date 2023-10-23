import { useEffect, useState } from 'react'
import MemoryCard from '../components/MemoryCard'
import { getMemories } from '../api/memories'
import EmptyState from '../components/EmptyState'

const Memories = () => {
  const [memories, setMemories] = useState([])
  const fetchMemories = () => {
    getMemories().then(data => setMemories(data))
  }
  useEffect(() => {
    fetchMemories()
  }, [])

  if (memories.length === 0)
    return (
      <div className='flex justify-center items-center pt-12'>
        <EmptyState />
      </div>
    )
  return (
    <div className='w-full flex flex-column justify-center  px-4 sm:px-8 lg:px-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-[5%]'>
        {memories.map(memory => (
          <MemoryCard key={memory._id} memory={memory} />
        ))}
      </div>
    </div>
  )
}

export default Memories
