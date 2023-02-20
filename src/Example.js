import React, { Component } from "react";

export default class Hello extends Component {

    constructor(props) {
        super(props)
        this.state = {
            light: true
        }
    }


    render() {



        let onChange = () => {

            this.setState({
                light: !this.state.light
            })
        }

        return (
            <div className="main">
                {this.state.light ?
                    <div style={{ width: "100px", height: "100px", backgroundColor: "green" }}></div>
                    :
                    <div style={{ width: "100px", height: "100px", backgroundColor: "red" }}></div>

                }

                <button onClick={onChange}> replace</button>
            </div>
        )
    }
}
