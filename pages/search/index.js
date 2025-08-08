import React from "react";
import PageHeader from "@/Components/modules/PageHeader/PageHeader";
import Result from "@/Components/tempelates/Search/Result";

function index({data}) {
  return (
    <>
      <PageHeader route="search" />
      <Result searchResult={data}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();

  const searchResult = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );

  return {
    props: {
      data: searchResult,
    },
  };
}

export default index;
