import React from 'react'
import {Button} from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

const ActionBar = (props) => {
  const direction = (props.type !== 'default') ? ('left') : ('right')
  return(
    <div className={`action-bar-container flex-direction-${direction}`} >
      {props.type === 'new-form' ? (
        <div className="icon-button-frame">
          <IconButton color="primary" aria-label="Add an alarm" onClick={() => props.changeType('default')}>
            <KeyboardArrowLeft />
          </IconButton>
        </div>

      ) : ('')}
      {props.type === 'default' ? (
        <Button
          color="primary"
          variant="contained"
          onClick={() => props.changeType("new-form")}
          >new</Button>
      ) : ('')}

    </div>
  )
}
export default ActionBar
