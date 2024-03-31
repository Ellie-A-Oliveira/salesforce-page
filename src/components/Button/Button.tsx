import React, { MouseEventHandler } from 'react';
import { ButtonElement } from './Button.style';
import { ButtonVariants, Sizes } from '../../constants';

interface ButtonProps {
	children: React.ReactNode;
	variant?: ButtonVariants;
	size?: Sizes;
	format?: 'round';
	className?: string;
	onClick?: MouseEventHandler;
	type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, variant, size, format, className, onClick, type='button' }: ButtonProps) => {
	return (
		<ButtonElement onClick={onClick} className={className} variant={variant} size={size} format={format} type={type}>
			{children}
		</ButtonElement>
	);
};
