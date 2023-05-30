import './PortifolioList.scss'
import React from 'react'

function PortifolioList({id, title, active, setSelected}) {
  return (
    <li className={active ? "portifolioList active " : "portifolioList"} onClick={()=>setSelected(id)}>
{title}
    </li>
  )
}

export default PortifolioList