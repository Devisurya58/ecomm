import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";


const Main =()=>{
   const [bestseller, setBestseller] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:1337/api/best-seller').then((bestseller)=>{
            console.log(bestseller.data.data)

        }).catch(()=>{

        }).fainally(()=>{
    
        });
    }, [])

    return(
        <>
        <Header/>
        <section>
            <artical>best seller</artical>
        </section>
        </>
    )
}
 

export default Main;