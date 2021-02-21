//this one is for using class component.........

// import React, { Component } from 'react'

// export default class CounterValue extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <>
//             <h1>{this.props.currentCounter}</h1>
//             <h1>{this.props.currentIncrease}</h1>
//             </>
//         )
//     }
// }

//this one is for using function component..........
import React from 'react'

export default function CounterValue(props) {
    return (
        <>
            <h1>{props.currentCounter}</h1>
            <h1>{props.currentIncrease}</h1>
         </>
    )
}
