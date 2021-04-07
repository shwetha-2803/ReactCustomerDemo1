const Button = (props) => {
    return(
        <button className='btn' onClick={props.onClick} style={{backgroundColor:props.color}}>{props.text}</button>
    )
}

export default Button