import styles from "./Button.module.css"

function Button(props){
    return (
        <button>
            {props.children}
        </button>
    )
}

export default Button