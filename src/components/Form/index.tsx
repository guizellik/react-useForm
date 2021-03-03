import React from 'react'
import { useForm } from 'react-hook-form'

import './style.css'

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data)
  }

  const watchEstadoCivil = watch('estadoCivil')

  return (
    <div className='form-wrapper'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          <li>
            <label>Nome: </label>
            <input name='nome' ref={register({ required: true })} placeholder='Digite seu nome...' />
            {errors.nome && 'Nome é obrigatório!'}
          </li>

          <li>
            <label>Cidade: </label>
            <input name='cidade' ref={register} placeholder='Digite sua cidade aqui...'/>
          </li>

          <li>
            <label>E-mail: </label>
            <input type='email' name='email' ref={register({ required: true })} placeholder='Digite seu e-mail aqui...' />
            {errors.email && 'E-mail é obrigatório!'}
          </li>

          <li>
            <label>Idade: </label>
            <input name='idade' type='number' ref={register({ required: true, min: 18 })} placeholder='Digite sua idade aqui...'/>
            {errors.idade && 'Menores de 18 anos não podem entrar!'} <br />
          </li>

          <li>
            <h4>Estado Civil</h4>
            <label className='container'>Solteiro
              <input name='estadoCivil' type='radio' value='solteiro' ref={register({ required: true })} />
              <span className='checkmark'></span>
            </label>
            <label className='container'>Casado
              <input name='estadoCivil' type='radio' value='casado' ref={register} />
              <span className='checkmark'></span>
            </label>
            {watchEstadoCivil === 'casado' && (
                <div className='conjuge-wrapper'>
                  <input type='text' name='conjuge'  placeholder='Digite o nome do cônjuge...' ref={register({ required: true})} />
                </div>
            )}
          </li>
        </ul>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Form
