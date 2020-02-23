import React from 'react'
import MachinesTableHeader from './MachinesTableHeader'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import HealthBar from '../HealthBar/HealthBar'

const MachineItems = ({ machines }) => {
  return (
    <div className='allMachines-container'>
      <div className='allMachines-result-container'>
        <MachinesTableHeader />
        {machines.map((item, index) => (
          <Link key={index} className='allMachines-result -items' to={`/machines/${item.id}`}>
            <div className='allMachines-item'>{item.name}</div>
            <div className='allMachines-item'>{item.ip_address}</div>
            <div style={{ display: 'flex', alignItems: 'center' }}><HealthBar health={item.health} showHealth /></div>
          </Link>
        ))}
      </div>
    </div>
  )
}

MachineItems.propTypes = {
  match: PropTypes.any,
  machines: PropTypes.array
}

export default MachineItems
