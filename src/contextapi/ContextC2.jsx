import React from 'react'
import ContextC3 from './ContextC3'
import { GlobalDataProvider } from './ContextAPI';

const ContextC2 = () => {
    const data = useContext(GlobalDataProvider);
    return (
    <div>ContextC2
        <hr />
        <ContextC3 />
    </div>
    )
}

export default ContextC2
