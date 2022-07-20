
import * as types from "./actionType"

const initialState={
    AdultCount:1,
    childCount:0
}

export const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    console.log(payload);

    switch(type){

        case types.ADULT_COUNT_INCREMENT:
            return {
                ...state,
                AdultCount:state.AdultCount+payload
            }

            case types.ADULT_COUNT_DECREMENT:
                return {
                    ...state,
                    AdultCount:state.AdultCount-payload
                }

                case types.CHILD_COUNT_INCREMENT:
                    return {
                        ...state,
                        childCount:state.childCount+payload
                    }

                    case types.CHILD_COUNT_DECREMENT:
                        return {
                            ...state,
                            childCount:state.childCount-payload
                        }
        default:
            return state
    }
}