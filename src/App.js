import React, { Suspense, lazy, useState } from "react"
import ReactDOM from 'react-dom/client'
import Header from "./components/Header"
import Body from "./components/Body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Error from "./components/Error"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import RestaurentMenu from "./components/RestaurentMenu"
import Profile from "./components/Profile"
import Shimmer from "./components/Shimmer"
import Cart from "./components/Cart"
import UserContext from "./Utils/UserContext"
import { Provider } from "react-redux"
import store from "./Utils/store"

const Instamart = lazy(()=> import("./components/Instamart"))

const App = ()=>{
    return(
        <Provider store={store}>
        <UserContext.Provider value={{
            name : 'chhatrapati'
        }}>
                <Header/>
                <Outlet/>
                <Footer/>
        </UserContext.Provider>
        </Provider>
    )
}
const creatingRouter = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        errorElement : <Error/>,
        children : [
            {
                path : '/',
                element : <Body user={{
                    name : 'Chhatrapati',
                    age : 22
                }}/>,
            },
            {
                path : '/about',
                element : <About/>,
                children : [
                    {
                        path : 'profile',
                        element : <Profile/>
                    }
                ]
            },
            {
                path : '/contact',
                element : <Contact/>,
            },
            {
                path : '/restaurant/:id',
                element : <RestaurentMenu/>,
            },
            {
                path : '/cart',
                element : <Cart/>,
            },
            {
                path : '/instamart',
                element : (
                    <Suspense fallback={<Shimmer/>}>
                        <Instamart/>
                    </Suspense>
                ),
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={creatingRouter}/>)