import FormCard from '@/components/shared/Form/card'
import NewProjectForm from '@/components/shared/Form/NewProjectForm'
import React from 'react'

const NewProjectPage = () => {
  return (
    <FormCard
            title='Novo projeto'
            description='Insira os dados e crie um novo projeto. Seja criativo!'
            form={<NewProjectForm />}
            />
  )
}

export default NewProjectPage