import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"Engineering Books"} heading={"Top's Engineering Books"}/>
      <HorizontalCardProduct category={"Gate Books"} heading={"Popular's Gate Books"}/>

      <VerticalCardProduct category={"Engineering Gadgets"} heading={"Engineering Gadgets"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"Mobiles"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Printers"} heading={"Printers"}/>
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"Processors"} heading={"Processors"}/>
      <VerticalCardProduct category={"Watches"} heading={"Watches"}/>
    </div>
  )
}

export default Home