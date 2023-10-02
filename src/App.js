// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Body from './Components/Body';
import Container from './Components/Container';
import Watchpage from './Components/Watchpage';
import Ingredients from './Components/Ingredients';
import Ingpage from './Components/Ingpage';
import store from './Components/utils.js/store';
import { Provider } from 'react-redux';
import Regional from './Components/Regional';
import Regionalitems from './Components/Regionalitems';
import Cart from './Components/Cart';

const App=()=>{

  const Approuter=createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<Container/>
        },
        {
          path:"/menuitem/:strCategory", 
          element:<Watchpage/>,
        },
        {
          path:"/ingredients",
          element:<Ingredients/>
        },
        {
          path:"/ingredient/:strIngredient",
          element:<Ingpage/>,
        },
        {
          path:"/area",
          element:<Regional/>
        },
        {
          path:"/regionalitems/:strArea",
          element:<Regionalitems/>
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ]
    },
  ])
  return(
    <Provider store={store}>
    <div>
    <Header/>
    <RouterProvider router={Approuter}/>
    
    </div>
    </Provider>

   
  )
}

export default App;
