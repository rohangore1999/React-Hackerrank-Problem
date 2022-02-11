import React, { useEffect, useState } from 'react';
import './App.css';
import CountryList from './Components/CountryList';
import Search from './Components/Search';
import { response } from './response';
import 'h8k-components';
import { Provider } from './context';

const title = "Country Filter";
function App() {
    // declaring state to manage the data which we have to update from Search Component
    const [data, setData] = useState([])
    console.log("data >>>", data)

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <section className="w-30 justify-content-center layout-column mt-30 mx-auto">
                {/* In provider the value we are passing data and setData so that in search component we can set this state's value */}
                <Provider value={{ data, setData }}>
                    <Search response={response} />
                    {/* in CountryList we are passing data which was set in Search Component */}
                    <CountryList response={response} data={data} />
                </Provider>
            </section>
        </div>
    );
}

export default App;
