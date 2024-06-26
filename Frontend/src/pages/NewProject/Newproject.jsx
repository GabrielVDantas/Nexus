import styles from './NewProject.module.css'
import Nav from '../../components/Nav/Nav'
import NewProjectForm from '../../components/Forms/NewProjectForm/NewProjectForm'

const Newproject = () => {
  return (
    <section className={styles.newProjectStyle}>
        <Nav />
        <NewProjectForm />
    </section>
  )
}

export default Newproject