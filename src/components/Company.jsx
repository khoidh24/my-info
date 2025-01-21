const Company = ({ className }) => {
  return (
    <div className={`card h-24 ${className}`}>
      <img
        src='/logo/estuary.png'
        alt='Estuary Solutions'
        className='h-auto w-[200px]'
      />
    </div>
  )
}

export default Company
