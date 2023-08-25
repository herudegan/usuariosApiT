import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import '../css/css.css'
import { ide, nomee, enderecoe, telefonee, cpfe } from './lista'

export default function Alterar() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [telefone, setTelefone] = useState('')

  async function Update(e: any) {
    var nomeC
    var enderecoC
    var telefoneC
    e.preventDefault()
    try{
      if(nome != ''){
        nomeC = nome
      }
      else{
        nomeC = nomee
      }
      if(endereco != ''){
        enderecoC = endereco
      }
      else{
        enderecoC = enderecoe
      }
      if(telefone != ''){
        telefoneC = telefone
      }
      else{
        telefoneC = telefonee
      }
      const response = await axios.put(`http://localhost:8000/Usuario/${ide}/`, {
        nome: nomeC,
        endereco: enderecoC,
        telefone: telefoneC,
        cpf: cpfe,
      })
      console.log('Response: ' + response)
      navigate('/lista')
    } 
    catch(error: any){
      alert(error.request.response)
    }
  }
  
  return (
    <>
      <form onSubmit={Update}>
        <div className='container'>
          <h1 className='titleC'>Alterar</h1>

          Nome:<br/>
          <input className='input' type="text" name="nome" defaultValue={nomee} required onChange={(e) => setNome(e.target.value)}/><br/>
          Endereço:<br/>
          <input className='input' type="text" name="endereco" defaultValue={enderecoe} required onChange={(e) => setEndereco(e.target.value)}/><br/>
          Telefone:<br/>
          <input className='input' type="text" name="telefone" defaultValue={telefonee} required onChange={(e) => setTelefone(e.target.value)}/><br/>
          
          <input className='button' type="submit" value="Alterar"/>
          <input style={{marginLeft: '1vw'}} className='button' type="button" onClick={() => {navigate('/lista')}} value="Voltar"/>
        </div>
      </form>
    </>
  )
}
