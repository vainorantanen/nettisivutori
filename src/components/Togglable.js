import React from 'react'
import { useState, useImperativeHandle, forwardRef } from 'react'
import { Button, Container } from '@mui/material'

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <Container sx={{ textAlign:'center' }}>
      <div style={hideWhenVisible}>
        <Button onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button
          sx={{ backgroundColor: 'red', color: 'white',
            transition: 'transform 0.3s',
            marginBottom: '2rem',
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundColor: 'red' },
          }}

          onClick={toggleVisibility}>Sulje</Button>
      </div>
    </Container>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable