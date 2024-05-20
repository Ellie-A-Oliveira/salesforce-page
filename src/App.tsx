import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home } from './pages';
import { Formulario } from './pages/Formulario/Formulario';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Success } from './pages/Success/Success';

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
					path="/formulario"
					element={
						<ScrollToTop>
							<Layout>
								<Formulario></Formulario>
							</Layout>
						</ScrollToTop>
					}
				></Route>

				<Route
					path="/success"
					element={
						<ScrollToTop>
							<Layout>
								<Success></Success>
							</Layout>
						</ScrollToTop>
					}
				></Route>

			</Routes>
		</BrowserRouter>
	);
}

export default App;
