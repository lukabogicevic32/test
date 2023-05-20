import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Button from "./UI/Button";
import NavBar from './UI/NavBar';

const ProductSingle = (props) => {
    let params = useParams();
    const id = params.id
    const product = useSelector(state => state.products.products.filter(products => products.id === parseInt(id))[0]);

    return (
        <>
            <NavBar id={id}/>
            <Button route={'/'}/>
            <main>
                <section>
                    <div>
                        <div>
                            <div>
                        </div>
                        <div>
                            </div>
                            <p>{product.title}</p>
                            <p>$ {product.price}</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ProductSingle;