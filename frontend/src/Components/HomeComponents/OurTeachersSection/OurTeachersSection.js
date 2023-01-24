import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./OurTeachersSection.scss"

const cardURL = "http://localhost:3003/";

function OurTeachersSection() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(cardURL).then((response) => {
            setData(response.data);
        });
    }, []);
    return (
        <div>
            {data.map((data) => (
                <div key={data.id}>
                    <div className='card_img'><img alt='foto' src={data.img} /></div>
                    <div>
                        <p>{data.name}</p>
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                    </div>
                </div>
            ))};
        </div>
    )
}

export default OurTeachersSection