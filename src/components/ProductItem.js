import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Card from "./UI/Card";
import NavBar from "./UI/NavBar";

const ProductItem = (props) => {
    const prod = props.item;
    let history = useHistory();

    return (
        <div>
        <NavBar/>
        <Card>
            <div>
                <div>
                    <p>{prod.title}</p>
                    <p>${prod.price}</p>
                </div>
                <div>
                    <div>
                        <button onClick={() => {history.push(`/product/${prod.id}`)}}>View Details</button>
                        <button onClick={() => {history.push(`/product/edit/${prod.id}`)}}>Edit</button>
                        <button onClick={() => {props.delete(prod.id)}}>Delete</button>
                    </div>
                </div>
            </div>
        </Card>
        </div>
    );
}

export default ProductItem;