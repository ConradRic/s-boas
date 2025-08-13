import Footer from "./components/footer/footer"
import Header from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import "./style/global.css"

function App() {
  return (

    <div className="app">
      <Header/>
      <div className="main-content">
        <Sidebar/>
      </div>
      <Footer/>
    </div>
  ) 
}

export default App
