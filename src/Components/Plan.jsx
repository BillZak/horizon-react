import imgv from '../Images/v.jpeg';
import imgc from '../Images/c.jpeg';
import imgt from '../Images/t.jpeg';
import imgs from '../Images/s.jpeg';


import React, { Component } from 'react';

class Plan extends Component {
    render() {
        return (
            <div>
                <div className="container">
			<h3 className="text-center plan">PLANS</h3>
			<div className="row thumbnails">
				<div className="col-md-3">
					 <div className="thumbnail">
				      <img src={imgv} alt="Virtual" className="img-responsive thumb"/>
				      <div className="caption">
				        <h3>Virtual Offices</h3>
				        <p>
				        	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				        	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				        	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				        	consequat.
				        </p>
				      </div>
				    </div>
				</div>
				<div className="col-md-3">
					 <div className="thumbnail">
				      <img src={imgc} alt="Customized" className="img-responsive thumb"/>
				      <div className="caption">
				        <h3>Customized Offices</h3>
				        <p>
				        	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				        	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				        	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				        	consequat.
				        </p>
				      </div>
				    </div>
				</div>
				<div className="col-md-3">
					 <div className="thumbnail">
				      <img src={imgs} alt="Serviced" className="img-responsive thumb"/>
				      <div className="caption">
				        <h3>Serviced Offices</h3>
				        <p>
				        	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				        	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				        	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				        	consequat.
				        </p>
				      </div>
				    </div>
				</div>
				<div className="col-md-3">
					 <div className="thumbnail">
			      <img src={imgt} alt="Meeting" className="img-responsive thumb"/>
			      <div className="caption">
			        <h3>Meeting Rooms</h3>
			        <p>
			        	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				        	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				        	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				        	consequat.
			        </p>
			      </div>
	              </div>
				</div>
			</div>
		</div>
            </div>
        );
    }
}

export default Plan;
