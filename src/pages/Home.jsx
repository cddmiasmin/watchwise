import { useState } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Slides from '../components/Slides';
import Tabs from '../components/Tabs';

const Home = () => {

  const [active, setActive] = useState(true);

  return (
    <div className={`w-screen h-screen bg-background flex ${active ? 'justify-star' : 'justify-center'} items-center`}>
      {
        !active
        ?
          <h1 className='font-bold text-white'>Carregando...</h1>
        :
          <>
            <div className='w-full h-full grid grid-rows-14 justify-star'>
              <Header />
              <Tabs />
              <Slides />
              <Footer />
            </div>
          </>
      }
    </div>
  )
}

export default Home
