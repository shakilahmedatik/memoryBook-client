/* eslint-disable react/prop-types */
const MemoryCard = ({ memory }) => {
  console.log(memory)
  return (
    <div className='card w-84 h-48 bg-primary text-primary-content'>
      <div className='card-body'>
        <h2 className='card-title'>{memory.title}</h2>
        <p>{memory.description}</p>
      </div>
    </div>
  )
}

export default MemoryCard
