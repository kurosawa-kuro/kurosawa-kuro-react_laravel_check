import axios from 'axios';
import React, { useEffect, useState } from 'react'

const url = "http://localhost:8000/api/"

function List() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`${url}hello_list`)
            console.log({ response })
            setData(response.data);
        }
        fetchData();
    }, []);

    return (
        <>
            <div>List</div>
            <ul>
                {data.map((x: { id: 0, first: "" }) => {
                    return (
                        <li key={x.id}>{x.first}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default List