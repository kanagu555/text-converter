import { Button } from '@mui/material'
import React, { useContext } from 'react'
import {AppContext} from './../../App'
import {MainFormContext} from '../../../src/components/FormFields/MainForm'

function ResetBtn() {

  const resetBtnContext = useContext(AppContext)
  const resetMsgContext = useContext(MainFormContext)
  const [setInputValue, setOutputValue] = [resetBtnContext[1], resetBtnContext[3]]
  const resetMsg = resetMsgContext[0];

  const resetFunc = () => {
    setInputValue('')
    setOutputValue('')
    resetMsg(false)
  }

  return (
    <div className="btn-margin">
        <Button variant="contained" color="error" onClick={resetFunc}>Reset</Button>
    </div>
  )
}

export default ResetBtn