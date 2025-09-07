import React from "react";
import {useState, useEffect} from "react"
import "./styles.css"

const App = () => {

    const [data, setData] = useState(null);


    const fetchData = async() => {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart");
        const data = await response.json();
        setData(data)
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <>
            <h1 className="title">Make a Joke</h1>

            {data ? (
                <>
                    <p>{data.setup}</p>
                    <p>{data.delivery}</p>
                </>
            ) : (
                <p>Loading ...</p>
            )}

            <button onClick={fetchData}>
                Get Another Joke
            </button>


        </>
    );



}




export default App;