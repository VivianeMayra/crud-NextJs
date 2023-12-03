"use client"
import { styled } from "styled-components"

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Container = styled.div`
  background-color: #fffcce;
  height: 450px;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`

export const TextContainer = styled.div`
  color: #000;
  width: 576px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;

  h2 {
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }

  button {
    border-radius: 100px;
    background: #fb8500;
    width: 200px;
    height: 50px;
    color: white;
    font-size: 20px;
    border: none;
    cursor: pointer;
  }
`

export const ImageContainer = styled.div`
  width: 300px;
`

export const ContainerServices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  div {
    width: 180px;

    p {
      color: #e67812;
      text-align: center;
      font-weight: 600;
    }
  }
`

export const ContainerAbout = styled.div`
  h3 {
    margin-left: 2rem;
    font-weight: 600;
    font-size: x-large;
  }
  div {
    background: #fffcce;
    padding: 20px;
  }
`
