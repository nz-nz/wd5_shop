import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { brandFromWidgetAct } from "../../../../../../store/action_creator";

function Index(props) {
    // const [ isChecked, setIsChecked ] = useState(false)
    const dispatcher = useDispatch();

    // console.log(isChecked, "first ")

    const handleChange = () => {
        // setIsChecked(!isChecked);
        dispatcher(brandFromWidgetAct(id));
    }

    const {
        title = '',
        id,
        isActive = false,
    } = props;

    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id={ title } checked={ isActive } onChange={ handleChange }/>
            <label className="form-check-label" htmlFor={ title }>{ title }</label>
        </div>
    );
}

export default Index;