import React from 'react'


const getAutoCompleteItems = (text, closeAutoCompleteAndUpdateInputValue) => {
  const handleUserSelection = (t) => {
    closeAutoCompleteAndUpdateInputValue(t);
  }
  return (  
    <div onClick={handleUserSelection.bind(this, text)}>
      <strong>
        {text.substr(0, text.length)}
      </strong>
    </div>
  )
}

const Suggestions = (props) => {
  const autoCompleteContainer = props.countries.map((country, id) => (
    getAutoCompleteItems(country.name, props.closeAutoCompleteAndUpdateInputValue)
  ))
  
  return (
    <div
      id='autocomplete-list'
      className='autocomplete-items'>
      <ul>{autoCompleteContainer}</ul>
    </div>
  )
}

export default Suggestions




