//this one is for using class component............

// import React, { Component } from 'react'
// export default class extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <>
//             <button onClick={this.props.handleCounter}>Increment Value</button>
//             <button onClick={this.props.handleIncrease}>Increase Value</button>
//            </> 
//         )
//     }
// }

//this one is for using function component...........

import React from 'react'

export default function IncrementValue(props) {
    return (
           <>
             <button onClick={props.handleCounter}>Increment Value</button>
             <button onClick={props.handleIncrease}>Increase Value</button>
           </> 
    )
}

