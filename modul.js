import React, { Component } from 'react';

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1 : [],
            num2 : [],
            sums : []
        }
    }

    calc=()=>{
        this.setState({
            num1: [ ...this.state.num1, this.refs.num1.value ],
            num2: [ ...this.state.num2, this.refs.num2.value ]
        })
        var sum = parseFloat(this.refs.num1.value) + parseFloat(this.refs.num2.value);
        this.setState({
            sums: [...this.state.sums, sum]
        })
    }

    render() { 
        const{typeName1, typeName2, btnName} = this.props;
        const{num1, num2, sums} = this.state;
        return (
        <>
        <label>
            {typeName1} : <input type="number" ref="num1"/>
        </label>
        <label>
            {typeName2} : <input type="number" ref="num2"/>
        </label>
        <label>
            <button ref="calc" onClick={this.calc}>
                {btnName}
            </button>
            <p></p>
        </label>
        <label>
            <table border="1px black" >
                <tr>
                    <td><b>Number 1 </b></td>
                    <td><b>Number 2 </b></td>
                    <td><b>Sum</b></td>
                </tr>
                {num1.map((el, i )=>(
                        <tr>
                            <td>{el}</td>
                            <td>{num2[i]}</td>
                            <td>{sums[i]}</td>
                        </tr>
                ))}
            </table>
        </label>
        </>  )
    }
}
 
export default Calc;