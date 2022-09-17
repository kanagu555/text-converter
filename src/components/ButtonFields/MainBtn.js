import React from 'react'
import LowerCaseBtn from './LowerCaseBtn'
import CamelCaseBtn from './CamelCaseBtn'
import MixedCaseBtn from './MixedCaseBtn'
import UpperCaseBtn from './UpperCaseBtn'
import './Button.css'

const MainBtn = () => {
    return (
        <div className='flex-btn-container'>
            <LowerCaseBtn />
            <UpperCaseBtn />
            <CamelCaseBtn />
            <MixedCaseBtn />
        </div>
    )
}

export default MainBtn