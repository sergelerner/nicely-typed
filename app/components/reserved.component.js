import React, { Component, PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-css-transition-group';
import * as actions from '../actions/reserved.actions';

class Reserved extends Component {

	render() {
		const { reserved } = this.props	
		return (
			<div>
				{
					reserved.map((group) => {
						return (
							<p className='row'>
								{
									group.map((word) => 

										<ReactTransitionGroup 
											transitionName="example" 
											transitionEnterTimeout={500} 
											transitionLeaveTimeout={300}
										>
											
											<span 
												key={word.id}                              
												className={(word.isInuse) ? 'inuse' : ''}>
												{word.theWord}
											</span>                    

										</ReactTransitionGroup>											
									)
								}                
							</p>
						)
					})
				}
			</div>
		);
	}
}

export default Reserved;
