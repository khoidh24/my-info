const Avatar = ({ className }) => {
  return (
    <div className={`card aspect-square ${className}`}>
      <img
        src='/avatar/leaf.webp'
        alt='Estuary Solutions'
        className='w-[200px] rounded-md border-2 border-gray-800'
      />
    </div>
  )
}

export default Avatar
