import ProductContainer from "./ProductContainer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { updateProduct } from "../store/store";

const EditProduct = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const product = useSelector(state => state.products.products.filter(products => products.id == params.id)[0]);
  
    const [enteredTitle, setEnteredTitle] = useState();
    const [enteredPrice, setEnteredPrice] = useState();
    const [enteredDescription, setEnteredDescription] = useState();

    const titleChangeHandler = event => setEnteredTitle(event.target.value);
    const priceChangeHandler = event => setEnteredPrice(event.target.value);
    const descriptionChangeHandler = event => setEnteredDescription(event.target.value);

    if (enteredTitle == undefined) setEnteredTitle(product.title);
    if (enteredPrice == undefined) setEnteredPrice(product.price);
    if (enteredDescription == undefined) setEnteredDescription(product.description);

    const submitHandler = event => {
        event.preventDefault();
        dispatch(updateProduct());
        history.push("/");  
    };

    return (
        <ProductContainer>
            <h1>{`Edit Product / ${product.title}`}</h1>
            <form  onSubmit={submitHandler}>
                <div>
                <div>
                    <div>
                        <div>
                       <label>Title:</label>
                         <input type='text' value={product.title} onChange={titleChangeHandler}/>
                        </div>
                          <div>
                        <label>Price:</label>
                        <input type='text' value={product.price} onChange={priceChangeHandler}/>
                         </div>
                        </div>
                        <div>
                        <div>
                         <label>Description:</label>
                        <textarea type='text' value={product.description} onChange={descriptionChangeHandler}/>
                         </div>
                        </div>
                    </div>
                    <div>
                        <button type='button'  onClick={() => history.push('/')} >Cancel</button>
                        <button type='submit'>Save</button>
                    </div>
                </div>
            </form>
        </ProductContainer>
    );
}

export default EditProduct;