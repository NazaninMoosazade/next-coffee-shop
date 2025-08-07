import React from "react";
import About from "@/Components/tempelates/Index/About";
import Services from "@/Components/tempelates/Index/Services";
import Slider from "@/Components/tempelates/Index/Slider";
import { data } from "autoprefixer";
import Offer from "@/Components/tempelates/Index/Offer";
import Menus from "@/Components/tempelates/Index/Menus";
import Reservation from "@/Components/tempelates/Index/Reservation";
import Testimonials from "@/Components/tempelates/Index/Testimonials";


function index({data}) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services}/>
      <Offer/>
      <Menus data={data.menu}/>
      <Reservation/>
      <Testimonials data={data.comments}/>
    </>
  );
}

export async function getStaticProps() {

  const servicesResponse = await fetch('http://localhost:4000/services')
  const servicesData = await servicesResponse.json()

  const menusResponse = await fetch('http://localhost:4000/menu')
  const menusData = await menusResponse.json()

  const commentsResponse = await fetch ('http://localhost:4000/comments')
  const commentsData = await commentsResponse.json()

  return {
    props: {
      data: {
        services : servicesData,
        menu : menusData,
        comments: commentsData
      },
    },
      revalidate: 60 * 60 * 12, // Second
  };
}

export default index;
