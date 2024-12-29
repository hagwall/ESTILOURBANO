import React from "react";
import { StyledButton, WhatsAppIcon } from "./WhatsAppButton.styles";
// import styles from "./WhatsAppButton.module.css"

function WhatsAppButton({numero}){

    const handleClick = () => {
        window.open(`https://wa.me/${numero}`, '_blank')
    }

    return(
        
        <StyledButton onClick={handleClick}>
            <WhatsAppIcon>
                <span>Contactanos por WhatsApp</span>
            </WhatsAppIcon>
        </StyledButton>
    )
}

export default WhatsAppButton