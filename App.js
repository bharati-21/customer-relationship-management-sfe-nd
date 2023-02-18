import { Provider } from "react-redux";
import AppContainer from "./src/components/AppContainer";
import initializeStore from "./src/store";
import { useEffect } from "react";

const App = () => {
	const store = initializeStore();

	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
};

export default App;
