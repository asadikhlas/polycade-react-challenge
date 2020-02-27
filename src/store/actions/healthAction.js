export const updateMachinesHealth = machines => dispatch =>
	dispatch({ type: 'UPDATE_MACHINES_HEALTH', payload: machines });

export const updateMachineHealth = machine => dispatch =>
	dispatch({ type: 'UPDATE_MACHINE_HEALTH', payload: machine });
