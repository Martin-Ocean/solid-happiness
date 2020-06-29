import React, { Component } from 'react';
import mobx, { PropTypes } from 'mobx-react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <section className="background-md background-container">
                </section>
                <section><p>spacer1</p></section>
                <section className="background-md background-container">
                </section>
                <section><p>spacer2</p></section>
                <section className="background-md background-container">
                </section>
                <section><p>spacer3</p></section>
                <section className="background-md background-container">
                </section>
                
            </div>
        )
        
    }
}

export default Home