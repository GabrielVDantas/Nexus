import React from 'react'
import FormCard from '../card'
import NewProjectForm from '.'

const NewProjectFormCard = () => {
    return (
        <FormCard
            title='Novo projeto'
            description='Insira os dados e crie um novo projeto. Seja criativo!'
            form={<NewProjectForm />}
            />
    )
}

export default NewProjectFormCard