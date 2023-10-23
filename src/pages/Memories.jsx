import { useEffect, useState } from 'react'
import MemoryCard from '../components/MemoryCard'
import { getMemories } from '../api/memories'

const Memories = () => {
  const [memories, setMemories] = useState([])
  const fetchMemories = () => {
    getMemories().then(data => setMemories(data))
  }
  useEffect(() => {
    fetchMemories()
  }, [])
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
