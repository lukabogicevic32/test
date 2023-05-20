import {useHistory} from "react-router-dom";
import { deleteProduct } from "../../store/store";
import {useDispatch} from "react-redux";

const NavBar = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const handleClick = (e, route) => {
        e.preventDefault();
        history.push(route);
    }

    const deleteHandler = (id) => {
        fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
        // .then(console.log);
        dispatch(deleteProduct(id));
        history.push('/')
    }

    return (
        <nav style={{minHeight: 80, borderBottom: '1px solid #F2F4F7'}}>
                <div id="navbarSupportedContent">
                    <div>
                        <button onClick={(event) => { handleClick(event, '/product/add')
                        }}>New product
                        </button>
                        {props.id &&
                            <>
                                {props.edit ? <button onClick={() => {
                                        history.push(`/product/${props.id}`)
                                    }}>View details
                                    </button> :
                                    <button onClick={() => {
                                        history.push(`/product/edit/${props.id}`)
                                    }}>Edit
                                    </button>
                                }
                                <button onClick={() => {deleteHandler(props.id)}}>Delete</button>
                            </>
                        }
                    </div>
                </div>
        </nav>
    );
}

export default NavBar;