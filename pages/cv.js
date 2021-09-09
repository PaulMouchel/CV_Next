import Header from '../components/CV/Header'
import Body from '../components/CV/Body'
import Footer from '../components/CV/Footer'

const cv = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
  }

export default cv