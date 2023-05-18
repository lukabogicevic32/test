import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/store";

const ProductItem = props => {
    const product = props.item;
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteHandler = () => {

        dispatch(deleteProduct(product.id));
        history.push("/");
    }

    return (
        <li>
            <div>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
                <div>{product.description}</div>
            </div>
            <div>
                <button type="button" onClick={() => history.push(`/product/edit/${product.id}`)}>Edit</button>
                <button type="button" onClick={deleteHandler}>Delete</button> 
            </div>
        </li>
    );
}

export default ProductItem;