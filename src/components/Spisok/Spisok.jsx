import { useState } from "react";

import { yoth, queue } from "../../data";

import "./Spisok.scss";

export function Spisok() {
    console.log(yoth.length, queue.length);
    const [spisok, setSpisok] = useState(false);
    return (
        <div className="spisok">
            <button
                onClick={() => {
                    setSpisok(!spisok);
                }}
            >
                Список
            </button>
            {spisok && (
                <div className="spisok">
                    <ul>
                        {yoth.map((person, index) => {
                            return (
                                <div
                                    className={person.checked ? "checked" : ""}
                                >
                                    <li key={index}>
                                        {" "}
                                        <div className="jc-sp">
                                            {" "}
                                            <div>{person.name}</div>{" "}
                                            <div>{person.date}</div>
                                        </div>
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
