import React from 'react'



export default function Pornlist({porn}) {
    return (
        <div>
            {porn.map(pornTitle =>(
                <div key={pornTitle}> {pornTitle} </div>
            ))};


        </div>
    )
}
