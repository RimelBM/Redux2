import React, { useState } from "react";
import { connect } from 'react-redux';
import {INCREMENT,DECREMENT,reset} from '../actions/typeAction'

const Counter = props => {
    console.log(props);
    const increment = () => {
      props.dispatch({ type: INCREMENT });
    };
   
    const decrement = () => {
      props.dispatch({ type: DECREMENT });
    };

    const reset = () => {
      props.dispatch({type:reset}) ;
    }
   
    return (
      <div style={{textAlign:'center', paddingTop:'5%'}}>
        <h2 style={{color:'red',fontFamily:'arial',fontSize:'50px'}}>Counter</h2>
        <div>
          <button style={{margin:'25px' , borderRadius:'9px',fontSize:"30px",width:'70px'}} onClick={(props.count ==0)?reset : decrement}>-</button>
          <span style={{fontSize:'30px',color:'red'}}>{props.count}</span>
          <button style={{margin:'25px', borderRadius:'9px',fontSize:"30px",width:'70px'}} onClick={increment}>+</button>
        </div>
      </div>
    );
   };
   const mapStateToProps = state => {
    return {
      count: state.count
    };
   };
   
   export default connect(mapStateToProps)(Counter);