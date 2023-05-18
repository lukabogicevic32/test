import { useSelector } from "react-redux";
import { useState } from "react";
import Loading from "./UI/Loading";
import ProductList from "./ProductList";
import ProductItem from "./ProductItem"; 

function Home() {
  const products = useSelector(state => state.products.products);

  let length = products.length;

  let count;
  if (length > 9){
   count = 9;
  }
  else {
    count = length;
  }

  const [isVisible, setIsVisible] = useState(9);

  const loadMore = () => {
    setIsVisible(prevState => {
      if (prevState + 9 <= length){
        return prevState + 9;
      }
      else{
        return prevState = length;
      }
    });
  }

  const isLoading = () => {
    if(length == 0){
      return true;
    }
    else{
      return false;
    }
  }

  return (
    <div>
      {isLoading() ? <Loading /> : 
        <ProductList>
          {products.slice(0, isVisible).map(product => (
            <ProductItem key={product.id} item={product}/>
          ))}
          <li>
            {isVisible >= length ? null : <button onClick={loadMore}>Load more</button>}
            <div>{`${isVisible} of ${length}`}</div>
          </li>
        </ProductList>}
    </div>
  )
}

export default Home;