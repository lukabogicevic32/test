import { Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";  
import EditProduct from "./components/EditProduct";

function App() {

  return (
      <Switch>
        <Route path="/" exact>
          <Route>
            <Home/>
          </Route>
        </Route>
        <Route path="/product/:id">
          <ProductDetails/>
        </Route>
        <Route path="/product">
          <Route path="/add">
            <AddProduct/>
          </Route>
          <Route path="/edit/:id">
            <EditProduct/>
          </Route>
        </Route>
      </Switch>
  )
}

export default App