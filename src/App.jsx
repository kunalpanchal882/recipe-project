import Mainroutes from "./Mainroutes"
import Navbar from "./component/Navbar"

const App = () => {
  return (
    <div className="w-screen h-screen bg-rose-50">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App