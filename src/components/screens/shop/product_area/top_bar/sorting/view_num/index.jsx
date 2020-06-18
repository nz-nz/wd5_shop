import React from 'react';

function Index(props) {
    return (
        <div className="view-product d-flex align-items-center">
            <p>View</p>
            <form action="#" method="get">
                <select name="select" id="viewProduct" style={ {display: "none"} }>
                    <option value="value">12</option>
                    <option value="value">24</option>
                    <option value="value">48</option>
                    <option value="value">96</option>
                </select>
                <div className="nice-select" tabIndex="0"><span className="current">12</span>
                    <ul className="list">
                        <li data-value="value" className="option selected">12</li>
                        <li data-value="value" className="option">24</li>
                        <li data-value="value" className="option">48</li>
                        <li data-value="value" className="option">96</li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default Index;