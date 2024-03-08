import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<></>
						</Layout>
					}
				></Route>
				<Route
					path="/contato"
					element={
						<Layout>
							<></>
						</Layout>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
