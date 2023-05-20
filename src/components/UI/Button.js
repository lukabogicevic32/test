import {useHistory} from "react-router-dom";

const Button = props => {
    let history = useHistory();
    const route = props.route;

    const handleClick = event => {
        event.preventDefault();
        history.push(route);
    }

    return (
        <div>
            <button onClick={handleClick}>Go Back</button>
        </div>
    );
}

export default Button;