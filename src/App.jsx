import {Route, Routes} from "react-router-dom";
import Home from "./pages/users/Home.jsx";
import ListProduct from "./pages/products/ListProduct.jsx";
import AddProduct from "./pages/products/AddProduct.jsx";
import UpdateProduct from "./pages/products/UpdateProduct.jsx";
import InfoProduct from "./pages/products/InfoProduct.jsx";


function App() {


  return (
    <>
      <Routes>

        <Route path={"products"} element={<Home/>}>
          <Route path={"home"} element={<ListProduct/>}/>
          <Route path={"add"} element={<AddProduct/>}/>
          <Route path={":id"} element={<UpdateProduct/>}/>
          <Route path={"info/:id"} element={<InfoProduct/>}/>
        </Route>

      </Routes>

    </>
  )
}

export default App
