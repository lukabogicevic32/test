import {useHistory} from 'react-router-dom';

const ProductContainer = (props) => {
  const history = useHistory();
  return (
    <div>
      <button type='button' onClick={() => history.push(-1)}>Back</button>
        <div>
          {props.children}
        </div>
        </div>
  );
};

export default ProductContainer;