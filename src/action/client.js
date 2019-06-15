import{clientnew} from "./actionTypes";

export const firstName = dispatch => (client) => {
    dispatch({
        type: clientnew,
        payload: client
    })
}
