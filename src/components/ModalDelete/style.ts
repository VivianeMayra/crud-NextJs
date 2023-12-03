"use client"
import * as Dialog from "@radix-ui/react-dialog"
import styled from "styled-components"

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #dbac2c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;

  @media (min-width: 1020px) {
    //Hack para centralizar div na tela
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  div {
    font-size: 16px;
    text-align: center;
    justify-content: center;
    display: flex;
    font-style: normal;
    gap: 15px;
    font-weight: 400;
    line-height: 162.5%; /* 26px */
  }

  button {
    background: #29292e;
    width: 150px;
    height: 50px;
    border-radius: 8px;
    border: 2px solid #29292e;
  }
`
