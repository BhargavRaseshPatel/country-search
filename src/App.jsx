import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Card from './Card'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [searchedCountries, setSearchedCountries] = useState([])

  useEffect(() => {
    fetch('https://countries-search-data-prod-812920491762.asia-south1.run.app/countries').then((data) => data.json()).then((data) => setCountries(data)).catch((error) => console.error("Error while fetching the data : ",error))
  }, [])

  const handlingSearch = (name) => {
    setSearch(name)
    let searchedCountries = countries.filter((country) => country.common.toLowerCase().includes(name.toLowerCase()))

    setSearchedCountries(searchedCountries)
  }

  return (
    <>
      <Header handlingSearch={handlingSearch} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

        {search == "" ? (countries.map((data, index) => (
          <Card key={index} name={data.common} image={data.png} />
        ))) : (
          (searchedCountries.map((data, index) => (
            <Card key={index} name={data.common} image={data.png} />
          )))
        )}
      </div>
    </>
  )
}

export default App
