"use client"

import { X } from "@phosphor-icons/react"
import * as Dialog from "@radix-ui/react-dialog"
import { ButtonClose, Content, Overlay } from "./style"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
//as chamadas para o banco ocorrem com o axios
import axios from "axios"

const formScheme = z.object({
  name: z
    .string()
    .min(2, { message: "o nome deve conter ao menos 2 caracteres" }),
  email: z.string().min(2, { message: "email inválido" }),
  phone: z
    .string()
    .min(15, { message: "telefone inválido" })
    .refine(
      (value) => {
        const regex = /^\(\d{2}\) \d{5}-\d{4}$/
        return regex.test(value)
      },
      {
        message: "Número de telefone inválido",
      }
    ),
  adress: z.string().min(2, { message: "campo obrigatório" }),
  pet: z.string().min(2, { message: "campo obrigatório" }),
})

type FormData = z.infer<typeof formScheme>

export function NewUserModal() {
  const { register, handleSubmit, reset } = useForm<z.infer<typeof formScheme>>(
    {
      resolver: zodResolver(formScheme),
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        adress: "",
        pet: "",
      },
    }
  )

  //usando o axios para se comunicar
  const handleCadastro = async (data: FormData) => {
    try {
      const response = await axios.post("/api/user", data)
      console.log("Dados enviados com sucesso:", data)
      console.log("Resposta do servidor:", response.data)
      reset() // Limpar o formulário após o envio bem-sucedido
    } catch (error) {
      console.error("Erro ao cadastrar:", error)
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Cadastrar proprietário</Dialog.Title>
        <ButtonClose>
          <X size={24} />
        </ButtonClose>

        <form onSubmit={handleSubmit(handleCadastro)}>
          <input
            type="text"
            placeholder="nome"
            required
            {...register("name")}
          />
          <input
            type="text"
            placeholder="email"
            required
            {...register("email")}
          />
          <input
            type="text"
            placeholder="(85)9XXXX-XXXX"
            required
            {...register("phone")}
          />
          <input
            type="text"
            placeholder="endereço"
            required
            {...register("adress")}
          />
          <input
            type="text"
            placeholder="nome do pet"
            required
            {...register("pet")}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
