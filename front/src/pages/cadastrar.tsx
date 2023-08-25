import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import '../css/css.css'

export default function Cadastro() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')

  async function Cadastro(e: any) {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/Usuario/', {
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        cpf: cpf,
      })
      console.log('Response: ' + response)
      alert('Cadastrado')
      navigate('/lista')
    } catch (error: any) {
      alert(error.request.response)
    }
  }
  
  return (
    <div className='containerC'>
      <h1 className='titleC'>Cadastrar</h1>

      <form onSubmit={Cadastro}>
        Nome:<br/>
        <input className='input' type="text" name="nome" required onChange={(e) => setNome(e.target.value)}/><br/>
        Endereço:<br/>
        <input className='input' type="text" name="endereco" required onChange={(e) => setEndereco(e.target.value)}/><br/>
        Telefone:<br/>
        <input className='input' type="text" name="telefone" required onChange={(e) => setTelefone(e.target.value)}/><br/>
        CPF:<br/>
        <input className='input' type="text" name="cpf" required onChange={(e) => setCpf(e.target.value)}/><br/>
        
        <input className='button' type="submit" value="Cadastrar"/>
      </form>
    </div>
  )
}
