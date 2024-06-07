import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"



function App() {
  const [data,setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal,setShowModal] = useState(false)
  function handleToggleModal(){
    setShowModal(!showModal)
  }
  useEffect(()=>{
     const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    const fetchApiData = async()=>{
       const url = 'https://api.nasa.gov/planetary/apod'+
      `?api_key=${NASA_KEY}`
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apidata = JSON.parse(localStorage.getItem(localKey))
        console.log('fetched from cache today')
        setData(apidata)
        return
      }
      localStorage.clear()
      try{
        const res = await fetch(url)
        const apidata = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apidata))
        console.log('fetched from API today')
         setData(apidata)
      }catch(err){
        console.log(err.message)
      }
    }
    fetchApiData()
  },[])


  return (
    <>
{data? <Main data={data}/> : <div className="loadingState"><i className="fa-solid fa-gear"></i></div>}
{showModal && <SideBar data={data} handleToggleModal ={handleToggleModal}/>}
{data && <Footer data={data} handleToggleModal ={handleToggleModal}/>}
    </>
  )
}

export default App
