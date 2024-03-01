import Modal from "./Modal";
import {useState} from 'react';
import { useCookies } from "react-cookie";

function ListHeader({listName, getData}) {
    const [cookies, SetCookies, removeCookies] = useCookies(null)
    const [showModal, setShowModal] =useState(false)
    const signOut =() =>{
        console.log("Sign out")
        removeCookies('Email')
        removeCookies('AuthToken')
        window.location.reload()
    }
    return (
      <div className="list-header">
        <h1>{listName}</h1>
        <div className="button-container">
            <button className="create" onClick={()=>setShowModal(true)}>ADD NEW</button>
            <button className="signout" onClick={signOut}>SIGN OUT</button>
        </div>
        {showModal && <Modal mode={'create'} setShowModal={setShowModal} getData={getData}/>}
      </div>
    );
  }
  
  export default ListHeader;