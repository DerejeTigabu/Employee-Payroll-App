import React from 'react'

const FormGroup = ({
    label,
    name,
    type = 'text',
    placeholder,
    disabled = false,
    value,
    onChange,
    onInput,
    reference,
  
}) => {
  return (
    <div className="form-group">
      <label className="text-accept">{label}</label>
      <input 
        type={type}
        name={name}
        className='form-control'
        placeholder={placeholder} 
        disabled={disabled}
        value={value}
        onChange={onChange}
        ref={reference}
        onInput={onInput}
                />

    </div>
  )
}

export default FormGroup
