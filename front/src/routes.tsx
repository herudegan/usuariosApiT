import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from './pages/header.tsx'
import Login from "./pages/login.tsx"
import Lista from "./pages/lista.tsx"
import Cadastro from "./pages/cadastrar.tsx"
import Alterar from "./pages/alterar.tsx"

export default function Rotas() {

    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path='/' element={ sessionStorage.getItem('logado') === '1' || localStorage.getItem('logado') === '1' ? <Lista /> : <Login/> } />
                <Route path='/lista' element={ sessionStorage.getItem('logado') === '1' || localStorage.getItem('logado') === '1' ? <Lista /> : <Login/> } />
                <Route path='/cadastro' element={ sessionStorage.getItem('logado') === '1' || localStorage.getItem('logado') === '1' ? <Cadastro /> : <Login/> } />
                <Route path='/alterar' element={ sessionStorage.getItem('logado') === '1' || localStorage.getItem('logado') === '1' ? <Alterar /> : <Login/> } />
            </Routes>
        </Router>
    )
}
