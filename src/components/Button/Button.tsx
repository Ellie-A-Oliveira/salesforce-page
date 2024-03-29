import React from 'react';
import { ButtonElement } from './Button.style';
import { ButtonVariants, Sizes } from '../../constants';

interface ButtonProps {
	children: React.ReactNode;
	variant?: ButtonVariants;
	size?: Sizes;
	format?: 'round';
	className?: string;
}

export const Button = ({ children, variant, size, format, className }: ButtonProps) => {
	return (
		<ButtonElement className={className} variant={variant} size={size} format={format}>
			{children}
		</ButtonElement>
	);
};
