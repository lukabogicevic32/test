import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import ProductItem from "./ProductItem";
import { deleteProduct } from "../store/store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = (props) => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    let length = products.length;
    const history = useHistory();

    let Count;
    if (length > 9) {
        Count = 9;
    } else {
        Count = length;
    }

    const [isVisible, setIsVisible] = useState(Count);

    const loadMore = () => {
        setIsVisible(prevState => {
            if (prevState + 9 <= length) {
                return prevState + 9;
            } else {
                return prevState = length;
            }
        });
    }

    const deleteHandler = (id) => {
        fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
        dispatch(deleteProduct(id));
        history.push('/')
    }

    return (
        <>
            <main>
                <header>
                    <h1>Products</h1>
                </header>
                <section>
                    <div>
                        {products.slice(0, isVisible).map(product => (
                            <ProductItem key={product.id} item={product} delete={deleteHandler}/>
                        ))}
                    </div>
                </section>
                <hr/>
                <div>
                    {isVisible >= length ? null  : <button onClick={loadMore}>Load more</button>}
                    <div>{`${isVisible} of ${length}`}</div>
                </div>
            </main>
        </>
    );
}

export default Home;