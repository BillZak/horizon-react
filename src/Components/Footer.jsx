import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid footer">
			<div className="row">
				<div className="col-md-4">
                    <h4 className="address">VISIT US IN KENYA</h4>
					<p className="country">Nairobi,Kenya</p>
					<p className="loc">Belgravia Center, 14 Riverside Drive,</p>
					<p className="loc">4th floor, Off Riverside drive</p>
					<p className="loc">Hanover Center,14 Riverside Drive</p>
					<p className="loc">6th floor, Off Riverside Drive</p>                                      
				</div>
				<div className="col-md-4">
					 <h4 className="address">VISIT US IN GHANA</h4>
					<p className="country">Accra,Ghana</p>
					<p className="loc">One Airpot Square, Airpot City</p>
					<p className="loc">8th Floor</p>
				</div>
				<div className="col-md-4">
					 <h4 className="address">VISIT US IN NIGERIA</h4>
					<p className="country">Lagos,Nigeria</p>
					<p className="loc">Sterling Bank Building</p>
				</div>
			</div>
		</div>
        </div>
    );
}

export default Footer;
