import React, { useContext, useState } from 'react'
import { myContext, Provider } from '../context';


function Search({ response }) {
  const [resultData, setResultData] = useState([])

  const inpSent = (e) => {
    let inpu = e.target.value
    console.log(inpu)

    let updatedResponse = response.filter((c) => {
      // c will contain each data from response
      if (c.includes(inpu)) {
        // if the input which user typed is contain in each item of response that will return
        return c
      }
    })
    console.log(updatedResponse)

    // setting into the resultData state
    setResultData(updatedResponse)

  }

  // getting the values from the provider
  const { setData } = useContext(myContext)

  console.log("resultData >>>", resultData)

  // setting the Data into provider's State
  setData(resultData)

  return (
    <input data-testid="filterInput" onChange={inpSent} className="large" placeholder="Enter Country Name" />
  );
}

export default Search;
