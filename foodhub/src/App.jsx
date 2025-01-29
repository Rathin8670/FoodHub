
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { About } from './pages/About';
import { Header } from './components/Header';
import {Body} from './components/Body'
import {Footer} from './components/Footer'
import { RestaurentMenu } from './pages/RestaurantMenu';
import { ContactUs } from './pages/ContactUs';
import { Profile } from './pages/Profile';
import { Cart } from './pages/Cart';

function App() {
  return (
    <>
      <div className='display flex flex-col'>
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
}

/*
  Header
    -
  Body
    -Restaurent cards
      -Restaurent Menu
  Footer
*/
export const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/restaurent/:resId',
        element:<RestaurentMenu/>
      },
      {
        path:'/contact',
        element:<ContactUs/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/profile',
        element:<Profile/>
      }
    ]
  }
])


export default App
