import React, {useEffect} from 'react';
import {useMergeState} from "../utils/helpers";
import * as Unicons from "@iconscout/react-unicons";
import Search from "../assets/images/search.png";
import Search2 from "../assets/images/search2.png";
import PagesUser from "../assets/images/pages-user.png";
import PinPrimary from "../assets/images/pin-primary.png";
import Profile from "../assets/images/profile.png";
import Post from "../assets/images/post.png";
import Like from "../assets/images/like.png";
import Comment from "../assets/images/comment.png";
import Bookmark from "../assets/images/bookmark.png";
import Share from "../assets/images/share.png";

const Home = (props) => {
	const [state, setState] = useMergeState({
	
	});
	
	useEffect(() => {
	
	}, []);
	
	return (
		<>
			<div className="cushion">
				<div className="main-content">
					<div className="row">
						<div className="col-lg-3">
							<div className="account-switch">
								<p className="account-switch-heading">Switch Account</p>
								
								<div className="account-tabs">
									<div className="account-pill active">
										<h5>Social</h5>
										<span className="count-badge-social">50+</span>
									</div>
									
									<div className="account-pill">
										<h5>Business</h5>
										<span className="count-badge-business">50+</span>
									</div>
								</div>
							</div>
							
							<div className="links">
								<div className="links-item active">
									<Unicons.UilRss size="20" className="mr-20"/>
									<span>Feeds</span>
								</div>
								
								<div className="links-item">
									<Unicons.UilImage size="20" className="mr-20"/>
									<span>Gallery</span>
								</div>
								
								<div className="links-item">
									<Unicons.UilSetting size="20" className="mr-20"/>
									<span>Settings</span>
								</div>
								
								<div className="links-item">
									<Unicons.UilUsersAlt size="20" className="mr-20"/>
									<span>Referral</span>
								</div>
								
								<div className="links-item">
									<Unicons.UilBookmarkFull size="20" className="mr-20"/>
									<span>Saved</span>
								</div>
							</div>
							
							<div className="pages">
								<div className="pages-header">
									<div className="d-flex flex-wrap align-items-center justify-content-between mb-10">
										<h4 className="text-primary mb-5 mt-0">My Pages</h4>
										
										<button className="btn btn-sm btn-round btn-primary my-auto btn-icon">
											<Unicons.UilPlusCircle size="20" className="mr-5"/>
											Create New
										</button>
									</div>
									
									<div className="input-container">
										<img src={Search2} alt="" className="input-icon"/>
										<input type="text" className="pages-search" placeholder="Search Pages"/>
									</div>
								</div>
								
								<div className="pages-body">
									<div className="pages-item">
										<div className="pages-user">
											<img src={PagesUser} alt="user" height={"50"} className="mr-10"/>
											
											<div>
												<h5 className="text-primary">Business Name</h5>
												<p className="small text-muted">Private Seller</p>
											</div>
										</div>
										
										<div className="pages-icon">
											<Unicons.UilEllipsisH size="15px"/>
											<img src={PinPrimary} alt="pin" height="20px" className="d-block"/>
										</div>
									</div>
									
									<div className="pages-item">
										<div className="pages-user">
											<img src={PagesUser} alt="user" height={"50"} className="mr-10"/>
											
											<div>
												<h5 className="text-primary">Business Name</h5>
												<p className="small text-muted">Private Seller</p>
											</div>
										</div>
										
										<div className="pages-icon">
											<Unicons.UilEllipsisH size="15px"/>
											<img src={PinPrimary} alt="pin" height="20px" className="d-block"/>
										</div>
									</div>
									
									<div className="pages-item">
										<div className="pages-user">
											<img src={PagesUser} alt="user" height={"50"} className="mr-10"/>
											
											<div>
												<h5 className="text-primary">Business Name</h5>
												<p className="small text-muted">Private Seller</p>
											</div>
										</div>
										
										<div className="pages-icon">
											<Unicons.UilEllipsisH size="15px"/>
											<img src={PinPrimary} alt="pin" height="20px" className="d-block"/>
										</div>
									</div>
									
									<div className="pages-item">
										<div className="pages-user">
											<img src={PagesUser} alt="user" height={"50"} className="mr-10"/>
											
											<div>
												<h5 className="text-primary">Business Name</h5>
												<p className="small text-muted">Private Seller</p>
											</div>
										</div>
										
										<div className="pages-icon">
											<Unicons.UilEllipsisH size="15px"/>
											<img src={PinPrimary} alt="pin" height="20px" className="d-block"/>
										</div>
									</div>
									
								</div>
							</div>
						</div>
						
						<div className="col-lg-6">
							<div className="page-tabs">
								<ul className="page-tab-list">
									<li className="page-tab-item">Community</li>
									<li className="page-tab-item">See What's Trending</li>
									<li className="page-tab-item active">My Page</li>
								</ul>
							</div>
							
							<div className="user-bio">
								<div className="d-lg-flex">
									<div className="d-lg-flex">
										<div className="profile-pic text-center">
											<img src={Profile} alt="profile" height="70px" className="mb-20 mr-10"/>
										</div>
										
										<div className="bio mr-10">
											<h2 className="profile-name">Rose Kooto</h2>
											
											<h5 className="profile-username">User name</h5>
											
											<p className="profile-bio">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
												incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
												nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
											</p>
										</div>
									</div>
									
									<div className="profile-stats">
										<div className="stats">
											<div className="stat-val">
												<h4 className="stat-number">105</h4>
												<p className="stat-title">Post</p>
											</div>
											
											<div className="stat-val">
												<h4 className="stat-number">708</h4>
												<p className="stat-title">Following</p>
											</div>
											
											<div className="stat-val">
												<h4 className="stat-number">150</h4>
												<p className="stat-title">Post</p>
											</div>
											
											<div className="stat-val">
												<h4 className="stat-number">120</h4>
												<p className="stat-title">Support</p>
											</div>
										</div>
										
										<button className="btn btn-primary btn-round">Following</button>
										
										<div className="other-pages">
											<p className="pages-heading">
												Other pages
											</p>
											
											<p className="pages-text">
												Business One Longer Name
											</p>
											
											<p className="pages-text">
												Business One
											</p>
											
											<p className="pages-text">
												Business One
											</p>
										</div>
									</div>
								</div>
							</div>
							
							<div className="create-post">
								<div className="post-input d-md-flex">
									<div className="input-container">
										<input type="text" className="post-content-input" placeholder="Share your moments"/>
									</div>
									
									<button className="btn btn-primary btn-round my-auto">Post</button>
								</div>
								
								<div className="post-media">
									<div className="media-item">
										<Unicons.UilImage size="18" className="mr-5 text-primary"/>
										<p className="media-tag">Image</p>
									</div>
									
									<div className="media-item">
										<Unicons.UilVideo size="18" className="mr-5 text-primary"/>
										<p className="media-tag">Videos</p>
									</div>
									
									<div className="media-item">
										<Unicons.UilMapPin size="18" className="mr-5 text-secondary"/>
										<p className="media-tag">Location</p>
									</div>
									
									<div className="media-item">
										<Unicons.UilTag size="18" className="mr-5 text-primary"/>
										<p className="media-tag">Tags</p>
									</div>
									
								</div>
							</div>
							
							<div className="post">
								<div className="d-lg-flex">
									<div className="row">
										<div className="col-lg-5">
											<img src={Post} alt="post-image" className="post-image" width="100%"/>
										</div>
										
										<div className="col-lg-7">
											<div className="post-content">
												<div className="post-content-header">
													<img src={Profile} alt="profile pic" height="50px" className="mr-10"/>
													
													<div className="post-header-details">
														<h4 className="">Rose Kooto</h4>
														
														<div className="post-header-stats">
															<p className="post-stat">Abuja</p>
															
															<p className="post-stat">11hr ago</p>
															
															<p className="post-stat">200 likes</p>
															
															<p className="post-stat">20 replies</p>
														</div>
													</div>
												</div>
												
												<div className="post-content-body">
													<div className="post-caption">
														Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
														tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
														quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
														consequat.
													</div>
													
													<div className="comments">
														<p className="small">View all comments</p>
														
														<div className="comment">
															<img src={Profile} alt="profile pic" height="30px" className="mr-10"/>
															
															<div className="comment-text">
																<h4>Rose Kooto</h4>
																
																<p>Last seen 11hr</p>
																
																<p className="comment-body">
																	consectetur adipiscing elit, sed do eiusmod
																	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
																	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
																	consequat.
																</p>
																
																<div className="post-actions">
																	<div className="left-actions">
																		<img src={Like} alt="like" height="20px" className="mr-10"/>
																		
																		<img src={Comment} alt="comment" height="20px" className="mr-10"/>
																		
																		<img src={Bookmark} alt="bookmark" height="20px" className="mr-10"/>
																	</div>
																	
																	<div className="left-actions">
																		<img src={Share} alt="share" height="20px" className=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="post">
								<div className="d-lg-flex">
									<div className="row">
										<div className="col-lg-5">
											<img src={Post} alt="post-image" className="post-image" width="100%"/>
										</div>
										
										<div className="col-lg-7">
											<div className="post-content">
												<div className="post-content-header">
													<img src={Profile} alt="profile pic" height="50px" className="mr-10"/>
													
													<div className="post-header-details">
														<h4 className="">Rose Kooto</h4>
														
														<div className="post-header-stats">
															<p className="post-stat">Abuja</p>
															
															<p className="post-stat">11hr ago</p>
															
															<p className="post-stat">200 likes</p>
															
															<p className="post-stat">20 replies</p>
														</div>
													</div>
												</div>
												
												<div className="post-content-body">
													<div className="post-caption">
														Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
														tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
														quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
														consequat.
													</div>
													
													<div className="comments">
														<p className="small">View all comments</p>
														
														<div className="comment">
															<img src={Profile} alt="profile pic" height="30px" className="mr-10"/>
															
															<div className="comment-text">
																<h4>Rose Kooto</h4>
																
																<p>Last seen 11hr</p>
																
																<p className="comment-body">
																	consectetur adipiscing elit, sed do eiusmod
																	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
																	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
																	consequat.
																</p>
																
																<div className="post-actions">
																	<div className="left-actions">
																		<img src={Like} alt="like" height="20px" className="mr-10"/>
																		
																		<img src={Comment} alt="comment" height="20px" className="mr-10"/>
																		
																		<img src={Bookmark} alt="bookmark" height="20px" className="mr-10"/>
																	</div>
																	
																	<div className="left-actions">
																		<img src={Share} alt="share" height="20px" className=""/>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="col-lg-3">
							<div className="listings">
								<h4>Suggested Listings</h4>
								
								<div className="listings-container">
									<div className="listing-single">
										<img src={Profile} alt="profile picture" height="50px" className="mr-10"/>
										
										<div className="listing-content">
											<div className="listing-header">
												<div>
													<h5 className="listing-heading">Smoothie</h5>
													<p className="listing-text">Smoothy store</p>
												</div>
												
												<button className="btn btn-primary btn-sm btn-round">
													Order
												</button>
											</div>
											
											<p className="listing-text">25 Orders left</p>
											<div className="bg-light">
												<div className="progress-bar seventy-five">
												</div>
											</div>
										</div>
									</div>
									
									<div className="listing-single">
										<img src={Profile} alt="profile picture" height="50px" className="mr-10"/>
										
										<div className="listing-content">
											<div className="listing-header">
												<div>
													<h5 className="listing-heading">Smoothie</h5>
													<p className="listing-text">Smoothy store</p>
												</div>
												
												<button className="btn btn-primary btn-sm btn-round">
													Order
												</button>
											</div>
											
											<p className="listing-text">25 Orders left</p>
											<div className="bg-light">
												<div className="progress-bar fifty">
												</div>
											</div>
										</div>
									</div>
									
									<div className="listing-single">
										<img src={Profile} alt="profile picture" height="50px" className="mr-10"/>
										
										<div className="listing-content">
											<div className="listing-header">
												<div>
													<h5 className="listing-heading">Smoothie</h5>
													<p className="listing-text">Smoothy store</p>
												</div>
												
												<button className="btn btn-primary btn-sm btn-round">
													Order
												</button>
											</div>
											
											<p className="listing-text">25 Orders left</p>
											<div className="bg-light">
												<div className="progress-bar twenty-five">
												</div>
											</div>
										</div>
									</div>
									
									<div className="listing-single">
										<img src={Profile} alt="profile picture" height="50px" className="mr-10"/>
										
										<div className="listing-content">
											<div className="listing-header">
												<div>
													<h5 className="listing-heading">Smoothie</h5>
													<p className="listing-text">Smoothy store</p>
												</div>
												
												<button className="btn btn-primary btn-sm btn-round">
													Order
												</button>
											</div>
											
											<p className="listing-text">25 Orders left</p>
											<div className="bg-light">
												<div className="progress-bar fifty">
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="suggested">
								<div className="page-tabs">
									<ul className="page-tab-list">
										<li className="page-tab-item">Suggested Users</li>
										<li className="page-tab-item active">Suggested Pages</li>
									</ul>
								</div>
								
								<div className="suggested-container">
									<div className="suggestion">
										<img src={Profile} alt="profile picture" height="50px" className="mr-5"/>
										
										<div className="suggestion-content">
											<div>
												<h5 className="suggestion-user">Rose Kooto</h5>
												<p className="suggestion-location">Abuja</p>
											</div>
											
											<div className="suggestion-actions">
												<button className="btn btn-primary btn-round btn-sm mr-5">
													Support
												</button>
												
												<img src={Bookmark} alt="bookmark" height="15px"/>
											</div>
										</div>
									</div>
									
									<div className="suggestion">
										<img src={Profile} alt="profile picture" height="50px" className="mr-5"/>
										
										<div className="suggestion-content">
											<div>
												<h5 className="suggestion-user">Rose Kooto</h5>
												<p className="suggestion-location">Abuja</p>
											</div>
											
											<div className="suggestion-actions">
												<button className="btn btn-primary btn-round btn-sm mr-5">
													Support
												</button>
												
												<img src={Bookmark} alt="bookmark" height="15px"/>
											</div>
										</div>
									</div>
									
									<div className="suggestion">
										<img src={Profile} alt="profile picture" height="50px" className="mr-5"/>
										
										<div className="suggestion-content">
											<div>
												<h5 className="suggestion-user">Rose Kooto</h5>
												<p className="suggestion-location">Abuja</p>
											</div>
											
											<div className="suggestion-actions">
												<button className="btn btn-primary btn-round btn-sm mr-5">
													Support
												</button>
												
												<img src={Bookmark} alt="bookmark" height="15px"/>
											</div>
										</div>
									</div>
									
									<div className="suggestion">
										<img src={Profile} alt="profile picture" height="50px" className="mr-5"/>
										
										<div className="suggestion-content">
											<div>
												<h5 className="suggestion-user">Rose Kooto</h5>
												<p className="suggestion-location">Abuja</p>
											</div>
											
											<div className="suggestion-actions">
												<button className="btn btn-primary btn-round btn-sm mr-5">
													Support
												</button>
												
												<img src={Bookmark} alt="bookmark" height="15px"/>
											</div>
										</div>
									</div>
									
									<div className="suggestion">
										<img src={Profile} alt="profile picture" height="55px" className="mr-5"/>
										
										<div className="suggestion-content">
											<div>
												<h5 className="suggestion-user">Rose Kooto</h5>
												<p className="suggestion-location">Abuja</p>
											</div>
											
											<div className="suggestion-actions">
												<button className="btn btn-primary btn-round btn-sm mr-5">
													Support
												</button>
												
												<img src={Bookmark} alt="bookmark" height="15px"/>
											</div>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</>
	)
};

export default Home;
