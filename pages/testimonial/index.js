import React from "react";
import PageHeader from "@/Components/modules/PageHeader/PageHeader";
import Comments from "@/Components/tempelates/Testimonial/Comments";

function index({comments}) {
  return (
    <>
      <PageHeader route="testimonial" />
      <Comments data={comments}/>
    </>
  );
}

export async function getStaticProps(context) {

  const res = await fetch ('http://localhost:4000/comments')
  const comments = await res.json()

  return {
    props: {
     comments
    },
      revalidate: 60 * 60 * 12, // Second
  };
}

export default index;
