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
  form {
    width: 100%;
    .input {
      width: 100%;
      padding: 10px;
      border: 1px solid teal;
      border-radius: 4px;
      font-size: 1rem;
      height: 2rem;
      margin-top: 1.5rem;
      &:focus {
        outline: none;
      }
    }
    .bttn {
      width: 40%;
      height: 2.5rem;
      padding: 5px auto;
      margin-top: 2rem;
      font-size: 1.2rem;
      background: teal;
      border: none;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: green;
      }
    }
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