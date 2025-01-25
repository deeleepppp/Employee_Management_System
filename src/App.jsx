import { useContext, useEffect,useState } from "react"
import Login from "./components/Auth/Login"
import AdminDeshboard from "./components/Dashboard/AdminDeshboard"
import EmployeeDeshboard from "./components/Dashboard/EmployeeDeshboard"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"
import { AuthContext } from "./context/AuthProvider"


function App() {
 const [user, setUser] = useState(null)
 const authData = useContext(AuthContext);
 const handleLogin = (email,password)=>{
  if(email=='admin@me.com'&&password=='123'){
    setUser('admin')
  }
 else if(authData && authData.employees.find((e)=>email==e.email && e.password == password)){
  setUser('employee')
 }
 else{
  alert('invalid Credentials')
 }

 }
 
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>:''}
    {user=='admin' ? <AdminDeshboard/>:<EmployeeDeshboard/>}
    </>
  )
}

export default App
