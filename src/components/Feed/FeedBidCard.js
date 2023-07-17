import { Container, Typography } from '@mui/material'
import React from 'react'

const FeedBidCard = ({ bid }) => {
  return (
    <Container>
      <Typography>Hinta: {bid.price}</Typography>
      <Typography>Selite: {bid.description}</Typography>
    </Container>
  )
}

export default FeedBidCard