"use client"
import { styled } from "styled-components"

export const ContainerHeader = styled.header`
  background-color: #fb8500;
  color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;

  a {
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
`

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
