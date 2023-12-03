"use client"
import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./style"
import axios from "axios"
import { UserData } from "@/app/crud/page"

//Adapte a propriedade user no seu componente ModalDelete

type ModalDeleteProps = {
  user: UserData | undefined
}

export function ModalDelete({ user }: ModalDeleteProps) {
  const handleDelete = async () => {
    try {
      const userId = user?.id
      if (userId) {
        const response = await axios.delete("/api/user", {
          data: { id: userId },
        })
        console.log("Dados deletados com sucesso:")
        console.log("Resposta do servidor:", response.data)
      }
    } catch (error) {
      console.error("Erro ao deletar:", error)

      // Adicionando esta linha para tratar o tipo 'unknown' do TypeScript
      if (axios.isAxiosError(error)) {
        console.error("Erro detalhado:", error.response?.data)
      } else {
        console.error("Erro desconhecido:", error)
      }
    }
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Excluir Comentário</Dialog.Title>
        <p>Você tem certeza que gostaria de excluir este comentário?</p>
        <div>
          <Dialog.Close>
            <button>Cancelar</button>
          </Dialog.Close>
          <button onClick={handleDelete}>Sim, Excluir</button>
        </div>
      </Content>
    </Dialog.Portal>
  )
}
