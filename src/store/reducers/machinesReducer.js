const initialState = {
	machines: [],
	// eslint-disable-next-line camelcase
	machine: { id: '', name: '', ip_address: '', health: '' },
	loading: false,
	errors: {}
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case 'FETCH_MACHINES_FULFILLED': {
			return {
				...state,
				machines: action.payload.data,
				loading: false,
				errors: {}
			};
		}

		case 'FETCH_MACHINES_PENDING': {
			return {
				...state,
				loading: true,
				errors: {}
			};
		}

		case 'FETCH_MACHINES_REJECTED': {
			return {
				...state,
				loading: false,
				errors: { global: action.payload.message }
			};
		}

		case 'FETCH_MACHINE_FULFILLED': {
			return {
				...state,
				machine: action.payload.data,
				errors: {},
				loading: false
			};
		}

		case 'FETCH_MACHINE_PENDING': {
			return {
				...state,
				loading: true,
				// eslint-disable-next-line camelcase
				machine: { id: '', name: '', ip_address: '', health: '' }
			};
		}

		case 'FETCH_MACHINE_REJECTED': {
			return {
				...state,
				loading: false,
				errors: { global: action.payload.message }
			};
		}

		case 'UPDATE_MACHINE_FULFILLED': {
			return {
				...state,
				machine: action.payload.data,
				errors: {},
				loading: false
			};
		}

		case 'UPDATE_MACHINE_PENDING': {
			return {
				...state,
				loading: true
			};
		}

		case 'UPDATE_MACHINE_REJECTED': {
			const data = action.payload.response.data;
			// eslint-disable-next-line camelcase
			const { name, ip_address } = data.errors;
			// eslint-disable-next-line camelcase
			const errors = { global: data.message, name: { name }, ip_address };
			return {
				...state,
				errors: errors,
				loading: false
			};
		}

		case 'UPDATE_MACHINE_NAME': {
			return {
				...state,
				machine: action.payload,
				errors: {},
				loading: false
			};
		}

		case 'UPDATE_MACHINES_HEALTH': {
			return {
				...state,
				machines: action.payload,
				errors: {},
				loading: false
			};
		}

		case 'UPDATE_MACHINE_HEALTH': {
			return {
				...state,
				machine: action.payload,
				errors: {},
				loading: false
			};
		}

		default: {
			return state;
		}
	}
};
