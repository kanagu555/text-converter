import { Button } from '@mui/material'
import React, { useContext } from 'react'
import {AppContext} from './../../App'

function ResetBtn() {

  const resetBtnContext = useContext(AppContext)
  const [setInputValue, setOutputValue] = [resetBtnContext[1], resetBtnContext[3]]

  const resetFunc = () => {
    setInputValue('')
    setOutputValue('')
  }

  return (
    <div className="btn-margin">
        <Button variant="contained" color="error" onClick={resetFunc}>Reset</Button>
    </div>
  )
}

export default ResetBtn