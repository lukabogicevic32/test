import { Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";
import AddProduct from "./components/AddProduct";
import { Fragment } from "react";
import NotFound from "./components/NotFound";

function App() {
    return (
      <Fragment>
            <Switch>
                <Route path="/">
                    <Route>
                      <Home/>
                    </Route>
                </Route>
                <Route path={'/products'} exact>
                    <Route path={'products/:id'}>
                      <ProductList/>
                    </Route>
                    <Route path={'/products/edit'}>
                      <EditProduct/>
                    </Route>
                    <Route path={'products/add'}>
                      <AddProduct/>
                    </Route>
                    <Route path='*'>
                        <NotFound/>
                    </Route>
                </Route>
            </Switch>
        </Fragment>
    );
}

export default App;