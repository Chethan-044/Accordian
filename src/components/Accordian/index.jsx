import React from 'react'
import data from './data'
import { useState } from 'react'





const Accordian = ()=>{
    
    const [selected, setselected] = useState(null )

function handlesingleselection(id){
    console.log(id);
    setselected(id === selected ? null : id)

    
}

    return <div className='wrapper'>
        {
            data && data.length>0 ? 
            data.map(dataitem=> 
            <div className='item'>
                <div onClick={()=> handlesingleselection(dataitem.id)} className='title'>
                    <h3>{dataitem.question}</h3>
                    <span>+</span>
                </div>
                {
                    selected == dataitem.id ? (<div className='content'>
                        {dataitem.answer}
                    </div>) : null
                }
            </div>
            ) 
            : <div>No data found</div>
        }
    </div>
}
export default Accordian
