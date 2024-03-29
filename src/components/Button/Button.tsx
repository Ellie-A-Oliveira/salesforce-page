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
}

export const Button = ({ children, variant, size, format, className, onClick }: ButtonProps) => {
	return (
		<ButtonElement onClick={onClick} className={className} variant={variant} size={size} format={format}>
			{children}
		</ButtonElement>
	);
};
