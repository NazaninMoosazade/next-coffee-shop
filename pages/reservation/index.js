import PageHeader from '@/Components/modules/PageHeader/PageHeader'
import ReservationDetails from '@/Components/tempelates/Reservation/ReservationDetails'
import React from 'react'

function index() {
  return (
    <>
    <PageHeader route="Reservation"/>
    <ReservationDetails/>
    </>
  )
}

export default index