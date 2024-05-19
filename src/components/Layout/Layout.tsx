import React from 'react';
import { Header, Footer } from '..';
import { exportClicksData } from '../../scripts/click-tracker';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header></Header>
			<main>{children}</main>
			<Footer className='mt-6'></Footer>
			{/* <button onClick={exportClicksData}>Export Clicks Data</button> */}
		</>
	);
};
