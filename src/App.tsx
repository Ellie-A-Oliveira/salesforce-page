import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home } from './pages';
import { Formulario } from './pages/Formulario/Formulario';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<Home></Home>
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
				<Route
					path="/formulario"
					element={
						<Layout>
							<Formulario></Formulario>
						</Layout>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
