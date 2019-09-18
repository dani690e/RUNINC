import React from 'react'
import map from '../images/map.JPG'

const contact = () => {
    return (
        <div className="Contact d-flex">
            <section className="contactInfo col-12 col-md-6">
                <h2 className="bg-yellow border border-dark">Contact</h2>
                <img src={map} alt="" className="img-fluid"/>
                <div className="information text-center text-white">
                    <h3 className="text-center">Running</h3>
                    <p>Kannikegade 12</p>
                    <p>8000 Aarhus C</p>
                    <p>Telefon: 26 13 26 96</p>
                    <p><u>info@runinc.dk</u></p>
                </div>
            </section>
            <section className="contact col-12 col-md-6">
                <h3 className="text-center">Send en besked</h3>
                <form className="d-flex flex-column">
                    <label htmlFor="name">NAVN:</label>
                    <input type="text" id="name"/>
                    <label htmlFor="email">EMAIL:</label>
                    <input type="email" id="email"/>
                    <label htmlFor="tlf">TELEFONNR.:</label>
                    <input type="number" id="tlf"/>
                    <label htmlFor="besked">BESKED:</label>
                    <textarea name="besked" id="besked" cols="30" rows="5"></textarea>
                    <button>Send besked</button>
                </form>
            </section>
        </div>
    );
}
 
export default contact;