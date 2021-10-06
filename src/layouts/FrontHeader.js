import React, {useEffect, useState} from 'react';
import * as Unicons from "@iconscout/react-unicons";
import {useMergeState} from "../utils/helpers";

import Avatar from "../assets/images/avatar.png";
import Flag from "../assets/images/usa.png";
import AngleDown from "../assets/images/angle-down.png";
import Bell from "../assets/images/bell.png";
import Envelope from "../assets/images/envelope.png";
import Search from "../assets/images/search.png";
import Logo from "../assets/images/logowhite.png";

const FrontHeader = (props) => {
	const [showLinks, setShowLinks] = useState(false);
	
	const toggleShowLinks = () => {
		setShowLinks({showLinks});
	};
	
	useEffect(() => {
	
	}, []);
	
	return (
		<>
			<header>
				<nav className="nav nav-inner">
					<div className="cushion w-100">
						<div className="nav-inner">
							<div className="nav-profile">
								<img src={Avatar} alt="avatar" height={"70"} className="mr-10"/>
								<img src={AngleDown} alt="angle down" height="8px" className="mr-10"/>
								Jonathan Deo
							</div>
							
							<div className="nav-links" id={showLinks ? "hidden" : ""}>
								<img src={Flag} alt="flag" className="nav-item link-item"/>
								
								<img src={Envelope} alt="flag" className="nav-item link-item"/>
								
								<img src={Bell} alt="flag" className="nav-item link-item"/>
								
								<div className="input-container mr-20 nav-item">
									<img src={Search} alt="" className="input-icon"/>
									<input type="text" className="nav-search" placeholder="Search"/>
								</div>
								
								<img src={Logo} alt="logo" className="nav-item link-item"/>
								
								<button className="button-collapse" onClick={() => setShowLinks(!showLinks)}>
									<Unicons.UilListUl size="20"/>
								</button>
							</div>
							
							{
								showLinks ?
									<div className="nav-links-mobile">
										<img src={Flag} alt="flag" width="50px" className="nav-mobile link-item-mobile"/>
										
										<img src={Envelope} alt="flag" className="nav-mobile link-item-mobile-icon"/>
										
										<img src={Bell} alt="flag" className="nav-mobile link-item-mobile-icon"/>
										
										<div className="input-container nav-mobile link-item-mobile">
											<input type="text" className="nav-search" placeholder="Search"/>
										</div>
									
									</div>
									: null
							}
						
						</div>
					</div>
					
					
				</nav>
			</header>
		</>
	)
};

export default FrontHeader;