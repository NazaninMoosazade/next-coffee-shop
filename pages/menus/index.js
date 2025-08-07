import React from 'react'
import PageHeader from '@/Components/modules/PageHeader/PageHeader'
import Pricing from '@/Components/tempelates/Menus/Pricing'

function index({menu}) {
  return (
    <>
     <PageHeader route="Menus"/>
     <Pricing data={menu}/>
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:4000/menu')
  const data =await res.json()

  return {
    props : {
      menu : data
    }
  }
}

export default index