import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Button from "./UI/Button";
import NavBar from './UI/NavBar';
import { useState,useEffect} from "react";
import { updateProduct } from "../store/store";

const EditProduct = () => {
    let params = useParams();
    const id = params.id;
    let history = useHistory();
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.products.filter(products => products.id === parseInt(id))[0]);
    const [categories, setCategories] = useState([]);
    const [editProd, setEditProd] = useState(product);

    const getApiData = async () => {
        const response = await fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
        setCategories(response);
    };

    useEffect(() => {
        getApiData()
    }, []);
   
    const formChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setEditProd((prevState) => {
            return {...prevState, [name]: value}
        })
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        fetch(`https://dummyjson.com/product/edit/${id}`, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...editProd
            })
        })
            .then(res => res.json())

        dispatch(updateProduct(editProd));

        history.push(`/product/edit/${id}`);
    }

    return (
        <>
            <NavBar id={id} edit={true}/>
            <Button route={'/'}/>
            <main>
                <section>
                    <hr/>
                    <div>
                        <form onSubmit={formSubmitHandler}>
                            <div>
                                <label htmlFor="title">Title</label>
                                <input onChange={formChangeHandler} type="text"
                                       name={'title'} value={editProd.title}/>
                            </div>

                            <div className={'form-group mb-3 col-12'}>
                                <label htmlFor="exampleDataList" className="form-label">Categories</label>
                                <input onChange={formChangeHandler} className="form-control" list="datalistOptions"
                                       name={'category'}
                                       placeholder={editProd.category}/>
                                <datalist id="datalistOptions">
                                    {categories.map((cat, id) => {
                                        return <option key={id} value={cat}/>
                                    })}
                                </datalist>
                            </div>


                            <div>
                                <label htmlFor="price">Price</label>
                                <div>
                                    <span>$</span>
                                    <input onChange={formChangeHandler} min={0} type="number"
                                           name={'price'}
                                           value={editProd.price}/>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description">Description</label>
                                <textarea name="description" onChange={(event) => {
                                    formChangeHandler(event);
                                }} value={editProd.description} id="bio" rows="10">

                                </textarea>
                            </div>

                            <div>
                                <div>
                                    <button type={"submit"}>Save changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );

}

export default EditProduct;