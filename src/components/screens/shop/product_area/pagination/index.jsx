import React from 'react';
import PageItem from './page_item';

function Index() {
    return (
        <nav aria-label="navigation">
            <ul className="pagination justify-content-end mt-50">
                <li className="page-item active"><a className="page-link" href="#">01.</a></li>
                <li className="page-item"><a className="page-link" href="#">02.</a></li>
                <PageItem>03.</PageItem>
                <PageItem>04.</PageItem>
            </ul>
        </nav>
    );
}

export default Index;