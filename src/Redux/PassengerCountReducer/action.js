
import * as types from "./actionType"

const AdultIncrementCount=(payload)=>{
    return{
        type:types.ADULT_COUNT_INCREMENT,
        payload
    }
   
}

const AdultDecrementCount=(payload)=>{
    return{
        type:types.ADULT_COUNT_DECREMENT,
        payload
    }
   
}

const ChildIncrementCount=(payload)=>{
    return {
        type:types.CHILD_COUNT_INCREMENT,
        payload
    }
   
}

const ChildDecrementCount=(payload)=>{
    return{
        type:types.CHILD_COUNT_DECREMENT,
        payload
    }
   
}

export {AdultIncrementCount,AdultDecrementCount,ChildIncrementCount,ChildDecrementCount}