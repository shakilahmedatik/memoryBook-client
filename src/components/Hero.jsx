import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>
            The richness of life lies in
            <span className='text-primary'> memories</span> we have forgotten.
          </h1>
          <p className='py-6'>
            We all have our time machines. Some take us back, they&apos;re
            called memories. Some take us forward, they&apos;re called dreams.
          </p>
          <div className='flex gap-2 justify-center'>
            <Link to='/memories' className='btn btn-secondary'>
              Visit Memories
            </Link>
            <Link to='/add-memory' className='btn btn-primary'>
              Create Memory
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
