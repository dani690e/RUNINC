import React from 'react'

const contact = () => {
    return (
        <div className="Contact container d-flex">
            <section className="contactInfo row col-6">
                <h2>Contact</h2>
            </section>
            <section className="contact row col-6">
                <h3>Send en besked</h3>
                <form className="d-flex flex-column">
                    <label htmlFor="name">Navn:</label>
                    <input type="text" id="name"/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"/>
                    <label htmlFor="tlf">Telefonnr.:</label>
                    <input type="number" id="tlf"/>
                    <label htmlFor="besked">Besked:</label>
                    <textarea name="besked" id="besked" cols="30" rows="10"></textarea>
                </form>
            </section>
        </div>
    );
}
 
export default contact;