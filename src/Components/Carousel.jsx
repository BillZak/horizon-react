import image1 from '../Images/officeimg1.jpg';
import image2 from '../Images/officeimg2.jpg';

import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
		  <ol className="carousel-indicators">
		    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
		    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
		    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
		  </ol>

		  <div className="carousel-inner" role="listbox">
		    <div className="item active">
		      <img src={image1} alt="offices"/>
		    </div>
		    <div className="item">
		      <img src={image2} alt="offices"/>
		    </div>
	    </div>

		  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
		    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		    <span className="sr-only">Previous</span>
		  </a>
		  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
		    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		    <span className="sr-only">Next</span>
		  </a>
		</div>
        </div>
    );
}

export default Carousel;
