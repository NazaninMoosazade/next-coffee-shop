import React from "react";
import PageHeader from "@/Components/modules/PageHeader/PageHeader";
import ServicesDetail from "@/Components/tempelates/Services/ServicesDetail";

function Services({ services }) {
  return (
    <>
      <PageHeader route="services" />
      <ServicesDetail data={services} />
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:4000/services");
  const data = await res.json();

  return {
    props: {
      services: data,
    },
  };
}

export default Services;
