import React from 'react'
import styled from 'styled-components'
import Basket from "./Basket";

const FormDiv = styled.div`
  top: 0;
  position: relative;
  background: black;
  width: 60%;
  margin: 0 auto;
  padding: 1rem 0;
  border-radius: 4px;
  h1 {
    margin: 1rem 0;
  }
  
  h3 {
    margin: 1rem 0 0 0;
    padding: 0;
    font-size: 1.5rem;
    cursor: pointer;
  }
`

const CartForm = ({ handleClose }) => {
  return (
    
      <FormDiv>
        <h1>Cart</h1>
        <FormDiv>
          <form>
            <Basket />
          </form>
          <h3 onClick={handleClose}>&times;</h3>
        </FormDiv>
      </FormDiv>
    
  )
}

export default CartForm