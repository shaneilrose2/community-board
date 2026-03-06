import logo from '/assets/F1.png'
import './App.css'
import Layout from './components/Layout'

const App = () => {
  

  return (
      <div className="App" >
          <div className="Header"> 
            <a href="https://www.formula1.com/">
             <img src={logo} alt= "F1 logo"/> 
            </a>
            <h1 className='page-title'>2026 Formula 1 Calendar</h1>
            {/*how do i connect this to the h1 in app.css*/}
          </div>
        
          <Layout />
        
      </div>
  )
}

export default App;
