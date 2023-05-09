import { Component } from "react";
// import UserContext from "../Utils/UserContext";

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : 'What',
            loc : 'where'
        }
    }
    async componentDidMount(){
        const url = await fetch('https://api.github.com/users/chhatrapati295')
        const data = await url.json()
        console.log(data)
        this.setState({
            name : data.name,
            loc : data.location
        })

    }
    render(){
        console.log('render')
        return(
            <>
            <h1>hello</h1>
                {/* <UserContext.Consumer>
                    {
                        ({user})=>(
                            <h1>{user.name} : {user.email}</h1>
                        )
                    }
                </UserContext.Consumer> */}
            <h1>{this.state.name}</h1>
            <h1>{this.state.loc}</h1>
            </>
        )
    }
}
export default Profile;