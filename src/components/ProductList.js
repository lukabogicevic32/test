import { Link } from "react-router-dom";

const ProductList = (props) => {
  return (
    <div>
      <ul >
        <li>
          <h1>Products:</h1>
        </li>
        <li>
          <Link to="/product/add"><button>Add Item</button></Link>
        </li>
        {props.children}
      </ul>
    </div>
  );
};

export default ProductList;