import { machines } from '../../api/machinesApi'

const url = '/machines'

export const fetchMachines = () =>
  dispatch => {
    dispatch({
      type: 'FETCH_MACHINES',
      payload: machines.get(url)
    })
  }

export const fetchMachine = (id) =>
  dispatch => {
    dispatch({
      type: 'FETCH_MACHINE',
      payload: machines.get(`${url}/${id}`)
    })
  }

export const updateMachine = (machine) =>
  dispatch => {
    dispatch({
      type: 'UPDATE_MACHINE',
      payload: machines.put(`${url}/${machine.id}`, machine)
    })
  }

export const updateMachineName = (machine) =>
  dispatch => {
    dispatch({
      type: 'UPDATE_MACHINE_NAME',
      payload: machine
    })
  }
