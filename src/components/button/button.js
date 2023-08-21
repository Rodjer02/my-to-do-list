
function Button({ value, Click }) {
    return (
        <button onClick={Click} style={{height: '30px', width: '20%', backgroundColor:'blueviolet', outline:'none'}}>{ value }</button>
    )
}

export default Button;