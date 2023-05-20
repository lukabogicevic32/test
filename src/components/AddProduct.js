import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import NavBar from './UI/NavBar';
import Button from "./UI/Button";
import { useState} from "react";
import { addProduct } from "../store/store";

const AddProduct = () => {
    let history = useHistory();
    const [prod, setProd] = useState([]);
    const dispatch = useDispatch();
    const nextId = useSelector(state => {
        return state.products.products.slice(-1)[0].id + 1;
    });
    const [charLeft, setCharLeft] = useState(400);

    const textAreaChangeHandler = event => {
        setCharLeft(400 - event.target.value.toString().length)
    }

    const formChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setProd((prevState) => {
            return {...prevState, [name]: value}
        })
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                ...prod
            })
        })
            .then(res => res.json())
        // .then(console.log);

        dispatch(addProduct({
            ...prod,
            id: nextId,
        }))

        history.push('/');
    }

    return (
        <>
            <NavBar/>
            <Button route={'/'}/>
            <main>
                <section>
                    <div>
                        <form onSubmit={formSubmitHandler}>
                            <div>
                                <label htmlFor="title">Title</label>
                                <input onChange={formChangeHandler} type="text"
                                       name={'title'} value={prod.title}/>
                            </div>

                            <div>
                                <label htmlFor="price">Price</label>
                                <div>
                                    <span>$</span>
                                    <input onChange={formChangeHandler} min={0} type="number"
                                           name={'price'}
                                           value={prod.price}/>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description">Description</label>
                                <textarea name="description" onChange={(event) => {
                                    formChangeHandler(event);
                                    textAreaChangeHandler(event)
                                }} value={prod.description} id="bio" rows="10">
                                </textarea>
                                <p>{charLeft} characters left</p>
                            </div>
                            <div>
                                <div>
                                    <button type={"submit"}>Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );

}

export default AddProduct;