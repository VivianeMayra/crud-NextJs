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

  @media (min-width: 1020px) {
    //Hack para centralizar div na tela
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      border-radius: 6px;
      border: 0;
      background: white;
      color: black;
      padding: 1rem;
      &::placeholder {
        color: gray;
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background: #c47f17;
      color: #ffffff;
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
`
export const ButtonClose = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: none;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: white;
`
