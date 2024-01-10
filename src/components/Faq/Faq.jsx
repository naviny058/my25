import React, { useState } from 'react'
import data from './data'
import './style.css'

const Faq = () => {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelect, setEnableMultiSelect] = useState(false)
  const [arr, setArr] = useState([])

  function handleSingleSelect(getCurrentId) {
    console.log('single');
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }
  function handleMultiSelect(getCurrentId) {
    console.log('todo multi');
  }
  function multiSelect() {
    setEnableMultiSelect(!enableMultiSelect)
    console.log(enableMultiSelect);
  }
  return (
    <>
      <div className="data-wrapper">
        <button onClick={multiSelect}>{enableMultiSelect ? 'Single Select' : 'Multi Select'}</button>
        {
          data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" onClick={enableMultiSelect === false ? () => handleMultiSelect(dataItem.id) : () => handleSingleSelect(dataItem.id)} key={dataItem.id} >
                {dataItem.question}
                <span> +</span>
                {
                  selected == dataItem.id ? <p>{dataItem.answer}</p> : null
                }
              </div>
            ))
          ) :
            <h3>No data</h3>
        }
      </div>
    </>
  )
}

export default Faq