import { Button } from '@mui/material'
import React, { useContext } from 'react'
import {AppContext} from './../../App'

function CopyBtn() {

  const copyBtnContext = useContext(AppContext)
  const outputValue = copyBtnContext[2]

  const copyFunc = () => {
    navigator.clipboard.writeText(outputValue)
  }

  return (
    <div className="btn-margin">
        <Button variant="contained" color="success" onClick={copyFunc}>Copy</Button>
    </div>
  )
}

export default CopyBtn