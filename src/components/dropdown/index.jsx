import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

DropDown.propTypes = {
    title: PropTypes.string.isRequired, // текст - label
    name: PropTypes.string.isRequired, // просто имя компонента для того, чтобы использовать в связке с родителем для идентификации того, кто породил событие onChange
    current: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]), // значение выбранного элемента (из массива options)
    options: PropTypes.array.isRequired, // массив доступных для выбора знечений выпадающего списка
    onChange: PropTypes.func.isRequired, // функция-обработчик изменений значения дропдауна
}

DropDown.defaultProps = {
    options: [],
}

function DropDown(props) {

    const [isOpened, setIsOpened] = useState(false);

    const {
        title,
        name,
        current,
        options,
        onChange
    } = props;

    function renderOptions() {
        return (
            <ul className="list">
                {
                    props.options.map((item, index) => {
                        return (
                            <li key={ index }
                                data-id={ index }
                                className={ `option ${ current == index && 'selected' }` }
                                onClick={ handleClickOption }
                            >
                                { item }
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    function handleClickOption(e) {
        const val = e.target.getAttribute('data-id');
        // console.log(val);
        onChange(val, name);
    }

    
    function handleClick() {
        setIsOpened(!isOpened);
    }
    
    return (
        <div className="sort-by-date d-flex align-items-center mr-15">
            <p style={ { textWrap: "no-wrap"}}>{ title }</p>
            <form>
                <div
                    className={ `nice-select ${isOpened && 'open'}` }
                    tabIndex="0"
                    onClick={ handleClick }
                >
                    <span className="current">
                        {
                            options[current] || ''
                        }
                    </span>
                    {
                        renderOptions()
                    }
                </div>
            </form>
        </div>
    );
}

export default DropDown;