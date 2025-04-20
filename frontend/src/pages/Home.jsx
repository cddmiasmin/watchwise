import { useState } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Slides from '../components/Slides';
import Tabs from '../components/Tabs';

const Home = () => {
  const [loading, setloading] = useState(true);

  return (
    <div className={`w-screen h-screen bg-background flex flex-col justify-star items-center`}>
      <Header />
      
    </div>
  )
}

export default Home
