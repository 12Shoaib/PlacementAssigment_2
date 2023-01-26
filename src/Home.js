import home from './home.module.css'
import LeftSection from './Sections/LeftSection/LeftSection'
import RightSection from './Sections/RightSection/RightSection'
import Navbar from './Sections/Navbar/Navbar'

const Home = () => {

  return (
    <div className={home.mainComponent}>
      <Navbar />
      <div className={home.container}>
      <div className={home.leftSection}>
        <LeftSection />
      </div>

      <div className={home.rightSection}>
        <RightSection />
      </div>    
      </div>
    </div>


  )
}

export default Home