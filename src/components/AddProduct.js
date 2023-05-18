import ProductContainer from "./ProductContainer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddProduct = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const Id = useSelector(state => {
        let length = state.products.products.length;
        return state.products.products[length - 1].id + 1;
    });

    const [enteredTitle, setEnteredTitle] = useState();
    const [enteredPrice, setEnteredPrice] = useState();
    const [enteredDescription, setEnteredDescription] = useState();

    const titleChangeHandler = event => setEnteredTitle(event.target.value);
    const priceChangeHandler = event => setEnteredPrice(event.target.value);
    const descriptionChangeHandler = event => setEnteredDescription(event.target.value);

    const submitHandler = event => {
        event.preventDefault();

        dispatch(addProduct());
        history.push("/");
        
    };

    return (
        <ProductContainer>
            <h1>Add Product</h1>
            <form onSubmit={submitHandler}>
            <div>
             <div>
            <div>
           <div>
            <label>Title</label>
            <input type='text' placeholder='Title' onChange={titleChangeHandler}/>
             </div>
            <div>
            <label>Price</label>
            <input type='number' min='0.5' max='5000' placeholder='Price' onChange={priceChangeHandler}/>
            </div>
            </div>
            <div>
             <div>
                <label>Description</label>
                <textarea type='text' onChange={descriptionChangeHandler}/>
                </div>
                </div>
                </div>
                 <div>
                 <button type='button' onClick={() => history.push('/')}>Cancel</button>
                 <button type='submit'>Add Product</button>
                 </div>
                </div>
            </form>
        </ProductContainer>
    );
}

export default AddProduct;