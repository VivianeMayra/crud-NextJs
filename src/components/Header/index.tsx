"use client"

import Link from "next/link"
import { ContainerHeader, ContainerLogo } from "./style"
import { PawPrint } from "@phosphor-icons/react"

export function Header() {
  return (
    <ContainerHeader>
      <Link href={`/`}>
        <ContainerLogo>
          <PawPrint size={32} weight="fill" />
          <h2>PetSitter</h2>
        </ContainerLogo>
      </Link>
      <Link href="">Login</Link>
    </ContainerHeader>
  )
}
