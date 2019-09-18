import React, { useState } from 'react'
import event from '../images/event.jpg'

const Event = () => {
    const [events] = useState([
        { Lokation: "Copenhagen Marathon", Dato: "Den 29. maj 2018" },
        { Lokation: "Aarhus City Run", Dato: "Den 1. juni 2018" },
        { Lokation: "Berlin Marathon", Dato: "Den 6. juni 2018" }
    ]);
    const EventList = events.map(event => {
        return (
            <div className="event" key={Math.random()}>
                <h4 className="text-decoration-none">{event.Lokation}</h4>
                <p>{event.Dato}</p>
            </div>
        )
    })
    return (
        <div className="Event row">
            <section className="col-12 pr-0 col-md-9">
                <h2 className="text-white">NEXT EVENT</h2>
                <img src={event} alt="" className="img-fluid"/>
            </section>
            <aside className="col-12 col-md-3 bg-yellow mh-50">
                <h3>Events</h3>
                <ul className="list-unstyled">
                    {EventList}
                </ul>
            </aside>
        </div>
    );
}

export default Event;