// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import img from '../public/assets/images/illustration-article.svg'
import avatar from '../public/assets/images/image-avatar.webp'
import './App.css'

function App() {

  return (
    <>
      <div className='container bg-white p-6 border-black border-2 rounded-3xl sm:max-w-xs lg:max-w-sm font-figtree sm:box-shadow-sm lg:box-shadow-lg'>
        <img className='rounded-2xl' src={img} alt="img" />
        <div className='my-6'>
          <div className='mb-3 max-w-28 bg-yellow p-2 rounded-lg'>
            <p className="text-black sm:text-sm lg:text-base font-bold">Learning</p>
          </div>
          <div className='text-left'>
            <p className='text-black mb-3 sm:text-sm lg:text-base'>Published 21 Dec 2023</p>
            <a href="#">
              <h1 className='text-black mb-3 sm:text-xl lg:text-2xl font-bold hover:text-yellow'>HTML & CSS foundations</h1>
            </a>
            <p className='text-gray sm:text-sm lg:text-base'>These languages are the backbone of every website, defining structure, content, and presentation</p>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='max-w-8'>
            <img src={avatar} alt="avatar" />
          </div>
          <span className='text-black sm:text-sm lg:text-base font-bold pl-3'>Greg Hooper</span>
        </div>
      </div>
    </>
  )
}

export default App
