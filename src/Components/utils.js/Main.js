import Body from "../Body";
import { Provider } from "react-redux";
import store from "./store";

const Main=()=>{
    return(
        <Provider store={store}>
            <Body/>
        </Provider>
    )
}
export default Main;