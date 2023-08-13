import './style.css'
import App from './App.jsx'
// import Clicker from './Clicker.jsx'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <div>
        <App 
        clickersCount={3}
        children={
            <h1>ReactApp</h1>
        } />
    </div>
)