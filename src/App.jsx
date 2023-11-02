import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return(
    <>
     <div>
       <div>
         <NavBar/>
       </div>
       <ItemListContainer greeting={"Bienvenidos al mundo Boca!!"}/>
     </div>
    </>
  )
}

export default App
