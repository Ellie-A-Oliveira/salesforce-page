import { HeaderForms } from "../HeaderForms/HeaderForms";

interface LayoutFormsProps {
	children: React.ReactNode;
}

export const LayoutForms = ({ children }: LayoutFormsProps) => {
	return (
		<>
			<HeaderForms></HeaderForms>
			<main>{children}</main>
		</>
	);
};