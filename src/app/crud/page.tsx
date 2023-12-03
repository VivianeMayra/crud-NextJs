"use client"

import { ModalDelete } from "@/components/ModalDelete"
import { ModalUptade } from "@/components/ModalUpdate"
import { NewUserModal } from "@/components/NewUserModal"
import { CrudContainer, HeaderCrud, TableContainer } from "@/styles/crud"
import { Pencil, Trash } from "@phosphor-icons/react"
import * as Dialog from "@radix-ui/react-dialog"

//importando axios para fazer as chamadas na nossa api
import axios from "axios"
import { useEffect, useState } from "react"

export interface UserData {
  id: number
  name: string
  email: string
  phone: string
  adress: string
  pet: string
}

export default function Crud() {
  const [users, setUsers] = useState<UserData[]>([])

  useEffect(() => {
    // Função para buscar os dados do backend e atualizar o estado
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/user")
        setUsers(response.data.users)
      } catch (error) {
        console.log("Erro ao buscar usuários:", error)
      }
    }

    //Chama a função para buscar os dados quando o componente monta
    fetchUsers()
  }, [])

  return (
    <CrudContainer>
      <HeaderCrud>
        <h1>Proprietários</h1>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>Incluir</button>
          </Dialog.Trigger>
          <NewUserModal />
        </Dialog.Root>
      </HeaderCrud>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>Nome do Pet</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.adress}</td>
                <td>{user.pet}</td>
                <td>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button>
                        <Pencil size={32} weight="fill" />
                      </button>
                    </Dialog.Trigger>
                    <ModalUptade user={user} />
                  </Dialog.Root>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button>
                        <Trash size={32} weight="fill" />
                      </button>
                    </Dialog.Trigger>
                    <ModalDelete user={user} />
                  </Dialog.Root>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </CrudContainer>
  )
}
