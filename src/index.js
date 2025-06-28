
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import ContextProvider from './Context/context.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<App />
	</ContextProvider>
);