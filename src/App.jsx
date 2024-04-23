import Card from "./components/Card"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {

  const [img, setImg] = useState();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [select, setSelect] = useState(1)
  const [country, setCountry] = useState("");
  const [results, setResults] = useState([]);


  const API_URL = `https://randomuser.me/api/?results=${select}`

  const getData = async () => {
    const response = await axios.get(API_URL);
    const resultsArr = response.data.results;
    setResults(resultsArr)
    setImg(resultsArr.picture.large)
    setName(resultsArr.name.first)
    setSurname(resultsArr.name.last)
    setEmail(resultsArr.email)
    setPhonenum(resultsArr.phone)
    setCountry(resultsArr.location.country)
    console.log(results)
  }

  useEffect(() => {
    getData()
  }, []);


  const catchSelect = (event) => {
    setSelect(event.target.value)
  }

  return (
    <div className='App'>

      <div>
        <h1 className='title'>Random Profile Generator</h1>
      </div>

      <div className="card-wrapper">
        {
          results.map((userData, index) => (
            <Card key={index}
              img={userData.picture.large}
              name={userData.name.first}
              surname={userData.name.last}
              email={userData.email}
              phonenum={userData.phone}
              country={userData.location.country}></Card>
          ))
        }
      </div>
      <div>
        <button className='getBtn' onClick={getData}>get random</button>
        <select value={select} onChange={catchSelect} className='select-input'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  )
}

export default App
