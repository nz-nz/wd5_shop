import React from 'react';

function Index(props) {
    return (
        <div className="sort-by-date d-flex align-items-center mr-15">
            <p>Sort by</p>
            <form action="#" method="get">
                <select name="select" id="sortBydate" style={ {display: "none"} }>
                    <option value="value">Date</option>
                    <option value="value">Newest</option>
                    <option value="value">Popular</option>
                </select>
                <div className="nice-select" tabIndex="0"><span className="current">Popular</span>
                    <ul className="list">
                        <li data-value="value" className="option">Date</li>
                        <li data-value="value" className="option">Newest</li>
                        <li data-value="value" className="option selected focus">Popular</li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default Index;