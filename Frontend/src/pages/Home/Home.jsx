import Outside from '../../components/Outside/Outside'
import Welcome from '../../components/Welcome/Welcome'

const Home = () => {
  return (
    <Outside leftContent={<Welcome />}/>
  )
}

export default Home