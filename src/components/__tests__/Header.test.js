import { render } from "@testing-library/react"
import Header from '../Header'
import { Provider } from "react-redux"
import store from "../../Utils/store"
import {StaticRouter} from 'react-router-dom/server'

test('To load header when rendering first time',()=>{
    const header = render(
        <StaticRouter>
        <Provider store={store}>
        <Header/>
        </Provider>
        </StaticRouter>
    );
    // console.log(header)
    const logo = header.getByTestId('logo')
    expect(logo.src).toBe("https://th.bing.com/th/id/R.f6bc2b2712b5a390fee444e60d312b69?rik=qTqjtW7Nn4UiJw&riu=http%3a%2f%2fwww.gadgetsmagazine.com.ph%2fwp-content%2fuploads%2f2017%2f09%2ffoodpanda-logo.png&ehk=Jy3z435XdWQADxTy4KoiuJvyN6HyGj9DOZIzHuitbEI%3d&risl=&pid=ImgRaw&r=0")
})

test('Cart item should be 0 in intital render',()=>{
    const header = render(
        <StaticRouter>
        <Provider store={store}>
        <Header/>
        </Provider>
        </StaticRouter>
    )
    const cart = header.getByTestId('cart')
    expect(cart.innerHTML).toBe('0')
})