import React from "react";
import "./EventForm.css";
import { useState } from "react";

export default function EventForm({ addData }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    function submitHandler(event) {
        event.preventDefault();

        const formDate = {
            id: ~~(Math.random() * 10000 + 1),
            title: title,
            date: date,
        };

        addData(formDate);
    }

    function reset() {
        setTitle("");
        setDate("");
    }

    return (
        <form className="event-from">
            <label>
                <strong>Event Title : {title}</strong>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br />
            <label>
                <strong>Event Date : {date}</strong>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>

            <section className="button-wrap">
                <button type="submit" onClick={submitHandler}>
                    제출하기
                </button>
                <button type="reset" onClick={reset}>
                    초기화
                </button>
            </section>
        </form>
    );
}
