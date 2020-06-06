import React from 'react';

const Button =(props) => {
    //const {datatoShow} = this.props
    //onClick = {this.props.datatoShow}
    console.log("from botton",props);
    return (
    <div>
        <button className="btn btn-primary"  onClick= {()=> this.props.datatoShow()}>
            Click here to generate new fact
        </button>
    </div>
    )
}
export default Button; 