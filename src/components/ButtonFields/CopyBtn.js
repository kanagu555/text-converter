import { Button } from '@mui/material'
import React, { useContext } from 'react'
import {AppContext} from './../../App'
import {MainFormContext} from '../../../src/components/FormFields/MainForm'

function CopyBtn() {

  const copyBtnContext = useContext(AppContext)
  const copySuccessMsg = useContext(MainFormContext)
  const outputValue = copyBtnContext[2]
  const copyMsg = copySuccessMsg[0];

  console.log('copySuccessMsg:', copySuccessMsg[0]);

  const copyFunc = () => {
    navigator.clipboard.writeText(outputValue)
    copyMsg(true)
  }

  return (
    <div className="btn-margin">
        <Button variant="contained" color="success" onClick={copyFunc}>Copy</Button>
    </div>
  )
}

export default CopyBtn