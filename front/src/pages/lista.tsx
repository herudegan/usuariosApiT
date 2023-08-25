import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import '../css/css.css'

var ide: number
var nomee: any
var enderecoe: any
var telefonee: number
var cpfe: number
export { ide, nomee, enderecoe, telefonee, cpfe}

export default function Lista() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  

  async function getAllUsers() {
    try{
        const response = axios.get("http://localhost:8000/Usuario/")
        setUsers((await response).data)
    }
    catch(error){
        console.log('Erro: '+error)
    }
  }

  async function Deletar(id: number) {
    try{
        const response = await axios.delete(`http://localhost:8000/Usuario/${id}`)
        getAllUsers()
        console.log('Response: ' + response)
    }
    catch(error){
        console.log('Error: '+error)
    }
  }

  function Alterar(id: number, nome: any, endereco: any, telefone: number, cpf: number) {
    ide = id
    nomee = nome
    enderecoe = endereco
    telefonee = telefone
    cpfe = cpf
    navigate('/alterar')
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  
  return (
    <div key={'chave 1'}>
      {users.map((x) => {
        return(
            <div key={x['id']}>
                <div className='container' key={x['nome']}>
                    <div>
                        <h3 className='nome'>{x['nome']}</h3><br/>
                        <table>
                          <tbody className='tr'>
                            <tr>
                                <td style={{paddingLeft: '3vw'}}>
                                Endereço:
                                </td>
                                <td>
                                {x['endereco']}
                                </td>
                            </tr>
                          </tbody>
                          <tbody className='tr'>
                            <tr>
                                <td style={{paddingLeft: '3vw'}}>
                                Telefone:
                                </td>
                                <td>
                                {x['telefone']}
                                </td>
                            </tr>
                          </tbody>
                          <tbody className='tr'>
                            <tr>
                                <td style={{paddingLeft: '3vw'}}>
                                CPF:
                                </td>
                                <td>
                                {x['cpf']}
                                </td>
                            </tr>
                          </tbody>
                        </table>
                        <button style={{marginTop: '6vh'}} className='button' onClick={() => {Alterar(x['id'], x['nome'], x['endereco'], x['telefone'], x['cpf'])}}>Alterar</button>
                        <button style={{marginLeft: '1vw'}} className='button' onClick={() => { 
                          if(window.confirm('Tem certeza de que deseja excluir os dados desse funcionário?')){
                            Deletar(x['id'])
                          }}}>Deletar</button>
                    </div>
                </div>
            </div>
        )
      })}
    </div>
  )
}