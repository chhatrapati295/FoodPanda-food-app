import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError()
    return(
        <div className="">
            <h1>You made a mistake</h1>
            <h1>{err.status} : {err.statusText}</h1>
        </div>
    )
}
export default Error;