import React, { useEffect, useState } from 'react'
import './nasa.css'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Main from './Main'

export default function Nasa() {
  console.log('Nasa')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);
  
  function handleToggleModal() {
    setShowModal(!showModal)
  }
  
  useEffect(() => {
    console.log('Use effect')
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }1
      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])
  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className='loadingState'>
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (<Sidebar data={data} handleToggleModal={handleToggleModal} />)}
      {data && (<Footer data={data} handleToggleModal={handleToggleModal} />)}
    </>
  )
}
