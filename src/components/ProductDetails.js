import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductContainer from "./ProductContainer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/store";

const ProductDetails = () => {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(deleteProduct(params.id));
        history.push("/");
    }

    const product = useSelector(state => state.products.products.filter(products => products.id == params.id)[0]);

    return (
        <ProductContainer>
            <div>
                <div>
                 <h1>{product.title}</h1>
                 <h2>{`${product.price}$`}</h2>
                </div>
                <div>
                <button type="button" onClick={() => history.push(`/product/edit/${params.id}`)}>Edit</button>
                <button type="button" onClick={deleteHandler}>Delete</button>
                </div>
            </div>
            <div>
                {product.images.map((image, id)=>(
                <img key={id} src={image}/>
                ))}
            </div>
            <div>
            <h3>Description:</h3>
            <div>{product.description}</div>
            </div>
        </ProductContainer>
    );
};

export default ProductDetails;