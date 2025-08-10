import React from "react";
import Comments from "@/Components/tempelates/Product/Comments";
import ProductsDetails from "@/Components/tempelates/Product/ProductDetails";

const Product = ({ product , comments}) => {
  return (
    <>
      <ProductsDetails data={product} />
      <Comments data={comments} />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/menu`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const productResponse = await fetch(`http://localhost:4000/menu/${params.id}`);
  const productdata = await productResponse.json();

  const commentResponse = await fetch(`http://localhost:4000/comments`);
  const comments = await commentResponse.json();

  const porductsComments = comments.filter((comment) => comment.productID === +params.id)

  return {
    props: {
      product : productdata,
      comments : porductsComments
    },
  };
}

export default Product;
