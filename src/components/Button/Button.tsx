import React from "react"
import { ButtonElement } from "./Button.style"
import { ButtonVariants, Sizes } from "../../constants";

interface ButtonProps {
    children: React.ReactNode;
    variant: ButtonVariants;
    size?: Sizes;
    format?: 'round'
}

export const Button = ({ children, variant, size, format }: ButtonProps) => {
    return (
        <ButtonElement
            variant={variant}
            size={size}
            format={format}
        >{children}</ButtonElement>
    )
}