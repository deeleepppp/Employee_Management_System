import { useContext, useEffect,useState } from "react"
import Login from "./components/Auth/Login"
import AdminDeshboard from "./components/Dashboard/AdminDeshboard"
import EmployeeDeshboard from "./components/Dashboard/EmployeeDeshboard"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"
import { AuthContext } from "./context/AuthProvider"


function App() {
 const [user, setUser] = useState(null)
 const [loggedInUserData, setLoggedInUserData] = useState(null)
 const authData = useContext(AuthContext)

useEffect(() => {
   const loggedInUser = localStorage.getItem("loggedInUser")
   if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
   }
   
},[])



 const handleLogin = (email,password)=>{
  if(email=='admin@me.com'&&password=='123'){
    setUser('admin')
    localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
  }
 else if(authData){
  const employee = authData.employees.find((e)=>email==e.email && e.password == password)
  if(employee){
     setUser('employee')
     setLoggedInUserData(employee)
  localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}))
  }
 
 }
 else{
  alert('invalid Credentials')
 }

 }
 
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>:''}
    {user=='admin' ? <AdminDeshboard/>:(user=='employee'?<EmployeeDeshboard data={loggedInUserData}/>:'')}
    </>
  )
}

export default App
