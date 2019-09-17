import React from 'react'
import Event from './Event'
import Shop from './Shop'
import Contact from './Contact'

const Frontpage = () => {
    return (
        <div className="pages">
            <div className="Frontpage">
                <h2 className="text-white">We Love <span className="text-warning">Running</span></h2>
            </div>
            <Event/>
            <Shop/>
            <Contact/>
        </div>
    );
}

export default Frontpage;