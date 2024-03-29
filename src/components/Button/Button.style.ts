import styled from 'styled-components';
import { ButtonVariants, Sizes } from '../../constants';
import { colors } from '../../styles/colors.style';
import { variables } from '../../styles/variables.style';

export const ButtonElement = styled.button<{
	variant?: ButtonVariants;
	size?: Sizes;
	format?: 'round';
}>`
	border-width: 1px;
	border-style: solid;
	border-color: unset;
	border-radius: ${variables.borderRadius.button};

	padding: 0.75rem 2rem;

	font-size: var(--text-size-small);
	font-weight: bold;

	cursor: pointer;

	transition:
		background-color 0.1s ease-in-out,
		border-color 0.1s ease-in-out,
		color 0.1s ease-in-out;

	/* SECTION - Variants */

	${(props) =>
		props.variant === 'primary' &&
		`
        background-color: ${colors.background.primary};
        color: ${colors.text.inverse};
        border-color: ${colors.background.primary};
        
        &:hover {
            background-color: ${colors.background.primaryHover};
            border-color: ${colors.background.primaryHover};
        }
        `}

	${(props) =>
		props.variant === 'primary-inverted' &&
		`
        background-color: ${colors.text.inverse};
        color: ${colors.background.primary};
        border-color: ${colors.background.primary};
        
        &:hover {
            background-color: ${colors.background.primary};
            color: ${colors.text.inverse};
        }
        `}

    ${(props) =>
		props.variant === 'success' &&
		`
        background-color: ${colors.background.success};
        color: ${colors.text.inverse};
        border-color: ${colors.background.success};

        &:hover {
            background-color: ${colors.background.successHover};
            border-color: ${colors.background.successHover};
        }
        `}

    ${(props) =>
		props.variant === 'success-inverted' &&
		`
        background-color: ${colors.text.inverse};
        color: ${colors.background.success};
        border-color: ${colors.background.success};

        &:hover {
            background-color: ${colors.background.success};};
            color: ${colors.text.inverse};
        }
        `}

    /* !SECTION - Variants */

    /* SECTION - Sizes */

    ${(props) =>
		props.size === 'sm' &&
		`
        padding: .25rem .75rem;
        `}

    /* !SECTION - Sizes */

    /* SECTION - Formats */

    ${(props) =>
		props.format === 'round' &&
		`
        border-radius: 50%;
        padding: .75rem;
        `}
    
    /* !SECTION - Formats */
`;
