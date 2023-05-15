import React from "react";

export default function ItemGenerator({ datas }) {
    return (
        <ul>
            {datas.map((data) => {
                return (
                    <li key={data.id}>
                        <h2>{data.title}</h2>
                        <time dateTime={data.date}>{data.date}</time>
                    </li>
                );
            })}
        </ul>
    );
}
