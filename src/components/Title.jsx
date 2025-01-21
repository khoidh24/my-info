const Title = ({ className }) => {
  return (
    <div className={`card flex-col px-8 text-white ${className}`}>
      <div className='flex w-full flex-col items-center justify-start gap-2'>
        <div className='w-full'>
          <h1 className='text-xl font-medium'>Frontend Developer</h1>
          <hr className='mt-2 w-4/5' />
        </div>
        <p className='w-full text-sm font-thin'>Junior</p>
      </div>
    </div>
  )
}

export default Title
