import React from 'react'
import LowerCaseBtn from './LowerCaseBtn'
import CamelCaseBtn from './CamelCaseBtn'
import MixedCaseBtn from './MixedCaseBtn'
import UpperCaseBtn from './UpperCaseBtn'

const MainBtn = () => {
    return (
        <div>
            <LowerCaseBtn />
            <CamelCaseBtn />
            <MixedCaseBtn />
            <UpperCaseBtn />
        </div>
    )
}

export default MainBtn