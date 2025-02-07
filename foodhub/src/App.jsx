
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { About } from './pages/About';
import { Header } from './components/Header';
import {Body} from './components/Body'
import {Footer} from './components/Footer'
import { RestaurentMenu } from './pages/RestaurantMenu';
import { ContactUs } from './pages/ContactUs';
//import { Profile } from './pages/Profile';
import { Cart } from './pages/Cart';
import  { lazy,Suspense } from 'react';

// lazy loading 
// make a separate bundle for profile 
const Profile=lazy(()=> import('./pages/Profile'))

function App() {

  return (
    <>
      <div className='display flex flex-col'>
      <Header />
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
        element:<Body />
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
        element:
        <Suspense fallback={<h1>Loading the page..</h1>}><Profile/></Suspense>
      }
    ]
  }
])


export default App
