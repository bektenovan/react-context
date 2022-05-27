import React, { useReducer } from "react";

export const counterContext =  React.createContext() 

const INIT_STATE = {
    counter: 0,
   counter2: 0
}
function reducer(state = INIT_STATE, action){
switch(action.type){
    case "INCREMENT" : 
    return{...state, counter: action.payload};
    case "DECREMENT" : 
    return{...state, counter: action.payload}
    case "MINUS_TEN" :
    return {...state, counter2: action.payload}
    case "PLUS_10":
    return{...state, counter2:action.payload}
    default: 
    return state
}
}

const CounterContextProvider = ({children}) => {
   const [state, dispatch] = useReducer(reducer, INIT_STATE)
//    console.log(state);
function increment(){
    dispatch({
        type: "INCREMENT",
        payload:state.counter + 1
    })

}
function decrement(){
    dispatch({
        type: "DECREMENT",
        payload: state.counter - 1
    })
}

function minus10(){
    dispatch({
        type: "MINUS_TEN",
        payload: state.counter2 - 10
    })
}

function plus10(){
dispatch({
    type: "PLUS_10",
    payload: state.counter2 + 10
})
}

    return(
        <counterContext.Provider value={{
          increment,
          decrement,
          minus10,
          plus10,
           counter: state.counter,
            counter: state.counter,
            counter2: state.counter2,
            counter2: state.counter2,
            }}>
{children}
        </counterContext.Provider>
    ) 
}

export default CounterContextProvider;