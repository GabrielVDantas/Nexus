import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string({ message: "O campo 'Nome' é obrigatório" })
    .min(1, { message: "O campo 'Nome' é obrigatório" }),
  partialDescription: z
    .string({ message: "O campo 'Pontos principais' é obrigatório!" })
    .min(1, { message: "O campo 'Pontos principais' é obrigatório!" })
    .max(100, { message: "Limite de caracteres atingido!" }),
  goal: z
    .number({ message: "Apenas valores positivos!" })
    .min(1, { message: "O campo 'Meta financeira' é obrigatório!" })
    .positive({ message: "Apenas valores positivos!" }),
  fullDescription: z
    .string({ message: "O campo 'Descrição completa' é obrigatório!" })
    .min(1, { message: "O campo 'Descrição completa' é obrigatório!" })
    .max(1000, { message: "Limite de caracteres atingido!" }),
  coverArt: z
    .instanceof(File, { message: "Você deve enviar uma imagem válida!" })
    .refine(file => file.type.startsWith('image/'), { message: "O arquivo deve ser uma imagem!" }),
  screenshots: z
    .instanceof(File, { message: "Você deve enviar imagens válidas!" })
    .refine(file => file.type.startsWith('image/'), { message: "Os arquivos devem ser imagens!" })
    .optional(),
})

export type FormSchema = z.infer<typeof formSchema>

