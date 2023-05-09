import { Outlet } from "react-router-dom";

const About = ()=>{
    return(
        <div className="">
            <h1>This is About Page</h1>
            <Outlet/>
        </div>
    )
}
export default About;