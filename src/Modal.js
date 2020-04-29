import React from 'react'
import styled from 'styled-components'
import CartForm from './components/CartForm'

const Div = styled.div`
  margin: 0 auto;
  margin-top: -4rem;
  width: 60%;
`

const Modal = ({ state, handleClose }) => {
  const { cartOpen } = state
  return (
    <> 
      {cartOpen && (<Div><CartForm handleClose={handleClose} /></Div>)}
    </>
  )
}

export default Modal