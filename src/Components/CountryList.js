import React, { useContext } from 'react';
import { myContext } from '../context';

function CountryList({ response, data }) {

  console.log("CL >>>", data)

  return (
    <section>
      {/* <h1 className="pa-10 pl-20">{data}</h1> */}
      <ul className="card country-list" data-testid="countryList">
        {/* if we have data (i.e. user has typed something) then it will show that list else it will show complete response */}

        {
          data.length > 0 ? (
            data.map((res, idx) => (
              <li key={idx} className="pa-10 pl-20">{res}</li>
            ))
          ) :
            (
              response.map((res, idx) => (
                <li key={idx} className="pa-10 pl-20">{res}</li>
              ))
            )

        }
      </ul>
    </section>
  );
}

export default CountryList;
{/* {response.map((res, idx) => (
          <li key={idx} className="pa-10 pl-20">{res}</li>
        ))} */}