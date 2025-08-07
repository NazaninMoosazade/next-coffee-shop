import PageHeader from '@/Components/modules/PageHeader/PageHeader'
import ContactDetails from '@/Components/tempelates/Contact/ContactDetails'
import React from 'react'

function index() {
  return (
    <>
    <PageHeader route="contact"/>
    <ContactDetails/>
    </>
  )
}

export default index