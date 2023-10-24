/* eslint-disable react/prop-types */
const MemoryCard = ({ memory }) => {
  console.log(memory)
  return (
    <div className='card w-84 h-48 bg-primary text-primary-content hover:bg-secondary relative'>
      <div className='card-body'>
        <h2 className='card-title'>{memory.title}</h2>
        <p>{memory.description}</p>
        <div className='cursor-pointer absolute right-0 top-0'>
          <kbd className='kbd bg-red-500 rounded-xl text-white'>X</kbd>
        </div>
      </div>
    </div>
  )
}

export default MemoryCard
