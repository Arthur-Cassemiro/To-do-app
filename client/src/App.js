import { useEffect,useState } from "react";
import ListHeader  from "./components/ListHeader";
import ListItem from './components/ListItem';
import Author from "./components/Author";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, SetCookies, removeCookies] = useCookies(null)
  const userEmail = cookies.Email
  const [tasks, setTasks] = useState(null)
  const authToken = cookies.AuthToken

  const getData = async () =>{
    

    try{
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
      const json = await response.json()
      
      setTasks(json)
    }
    catch(err){
      console.log(err)
  }
  }


  useEffect(()=>{
    if(authToken){
      getData()
    }
  },[])

  //Sort by date

  const sortedTasks = tasks?.sort((a,b)=> new Date(a.date) - new Date(b.date))
  return (
    <div className="app">
      {!authToken && <Author/>}
     {authToken && 
     <>
     <ListHeader listName={'Holiday tick list'} getData={getData}/>
     <p className="user-email">Welcome back {userEmail}</p>
     {sortedTasks?.map((task) =><ListItem key={task.id} task={task} getData={getData}/>)}
     </>}
     <p className="copyright">Creative Coding LLC</p>
    </div>
  );
}

export default App;
