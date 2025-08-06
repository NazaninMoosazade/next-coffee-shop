import React from "react";
import About from "@/Components/tempelates/Index/About";
import Services from "@/Components/tempelates/Index/Services";
import Slider from "@/Components/tempelates/Index/Slider";
import { data } from "autoprefixer";
import Offer from "@/Components/tempelates/Index/Offer";

function index({data}) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services}/>
      <Offer/>
    </>
  );
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:4000/services')
  const services = await res.json()

  return {
    props: {
      data: {
        services
      },
    },
      revalidate: 60 * 60 * 12, // Second
  };
}

export default index;
