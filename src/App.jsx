import Avatar from './components/Avatar'
import Clock from './components/Clock'
import Company from './components/Company'
import Show from './components/Show'
import Social from './components/Social'
import Title from './components/Title'

const App = () => {
  return (
    <div className='flex w-full items-center justify-center overflow-hidden bg-black'>
      <div className='dot flex h-screen w-[50vh] flex-col items-center justify-between bg-gray-950'>
        <div className='mx-4 mt-12 grid grid-cols-3 gap-4'>
          <Company className='col-span-3' />
          <Avatar className='col-span-1' />
          <Title className='col-span-2' />
          <Show className='col-span-2' />
          <Clock className='col-span-1' />
          <Social />
        </div>
        <div className='relative mb-8 flex w-full items-center justify-center'>
          <p className='absolute left-[42%] top-0 italic text-white'>
            Powered by
          </p>
          <img
            src='/logo/nambat-white-logo.png'
            alt='Nambat E-card'
            className='mt-2 w-[200px]'
          />
        </div>
      </div>
    </div>
  )
}

export default App
