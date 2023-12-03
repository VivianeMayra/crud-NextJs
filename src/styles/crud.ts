"use client"

import styled from "styled-components"

export const CrudContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const HeaderCrud = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 60rem;

  h1 {
  }

  button {
    background-color: #dbac2c;
    color: white;
    padding: 5px;
    cursor: pointer;
    border-radius: 8px;
    align-items: center;
  }
`

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }

    button {
      margin-right: 5px;
      background-color: transparent;
      padding: 2px;
    }
  }
`
