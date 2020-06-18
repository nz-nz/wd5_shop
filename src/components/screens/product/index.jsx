import React from 'react';
import Breadcrumb from './breadcrumb';
import Thumbs from './thumbs';
import Description from './description';

function Index() {
    return (
        <div className="single-product-area section-padding-100 clearfix">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">

                        <Breadcrumb/>

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-7">

                        <Thumbs/>

                    </div>
                    <div className="col-12 col-lg-5">

                        <Description/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;