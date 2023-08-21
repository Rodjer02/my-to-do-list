function Input({placeholder, textInp}) {
    return (
        <input style={{ height: '30px', width: '80%', paddingLeft: '10px' }} placeholder={placeholder} onChange={ textInp }/>
    )
}

export default Input;