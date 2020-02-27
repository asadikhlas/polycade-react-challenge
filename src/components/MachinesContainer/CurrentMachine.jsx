import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HealthBar from '../HealthBar/HealthBar';

class CurrentMachine extends Component {
	componentDidMount () {
		this.props.onHandleGetMachine(this.props.match.params.machineId);
	}

	render () {
		const {
			machine,
			onHandleNameChange,
			onHandleMachineUpdate
		} = this.props;
		return (
			<div>
				{this.props.machine && (
					<div className='flexer' style={{ padding: 20 }}>
						<div style={{ flex: 1 }}>
							<h1>{machine.name}</h1>
							<h3>Update Device</h3>
							<form
								style={{ width: '50%' }}
								id={machine.id}
								onSubmit={onHandleMachineUpdate}
							>
								<p>Name: </p>
								<input
									type='text'
									value={machine.name}
									onChange={onHandleNameChange}
									autoFocus
									className='update-machine-name'
								/>
								<button
									className='update-machine-btn'
									type='submit'
								>
									SUBMIT
								</button>
							</form>
						</div>
						<div style={{ flex: 1 }}>
							<div className='flexer health-box'>
								<h1>{machine.health}</h1>
								<HealthBar health={machine.health} />
							</div>
							<div>
								<h3>Stats</h3>
								<p>
									IP Address:{' '}
									<span>{machine.ip_address}</span>
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

CurrentMachine.propTypes = {
	match: PropTypes.any,
	machine: PropTypes.object.isRequired,
	onHandleMachineUpdate: PropTypes.func,
	onHandleGetMachine: PropTypes.func,
	onHandleNameChange: PropTypes.func
};

export default CurrentMachine;
