import React from 'react';
import PropTypes from 'prop-types';
import './HealthBar.css';
import { getHealthColor } from '../../utils/healthUtils';

const HealthBar = ({ health, showHealth }) => {
	return (
		<>
			<div className='healthBar-container'>
				<div
					style={{
						height: '100%',
						backgroundColor: getHealthColor(health),
						width: `${health}%`
					}}
				/>
			</div>
			<div>&nbsp;&nbsp;{showHealth && health}</div>
		</>
	);
};

HealthBar.propTypes = {
	health: PropTypes.any,
	showHealth: PropTypes.bool
};

export default HealthBar;
