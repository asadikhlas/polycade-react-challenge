import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import CurrentMachine from './CurrentMachine'
import MachineItems from './MachineItems'
import './index.css'

const MachinesContainer = (props) => {
  return (
    <div>
      {props.errors && <div className='message'>{props.errors.global}</div>}
      {props.loading && <div className='message'>Working...</div>}
      <Switch>
        <Route exact path='/machines'>
          <MachineItems {...props} />
        </Route>
        <Route
          path='/machines/:machineId' render={
            routerProps =>
              <CurrentMachine
                {...routerProps}
                onHandleMachineUpdate={props.onHandleMachineUpdate}
                onHandleGetMachine={props.onHandleGetMachine}
                onHandleNameChange={props.onHandleNameChange}
                machine={props.machine}
              />
          }
        />
      </Switch>
    </div>
  )
}

MachinesContainer.propTypes = {
  errors: PropTypes.object,
  loading: PropTypes.bool,
  machines: PropTypes.array,
  machine: PropTypes.object,
  onHandleMachineUpdate: PropTypes.func,
  onHandleGetMachine: PropTypes.func,
  onHandleNameChange: PropTypes.func
}

export default MachinesContainer
