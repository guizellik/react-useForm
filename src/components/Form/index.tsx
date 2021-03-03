import React from 'react'
import { useForm } from 'react-hook-form'


const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data)
  }

  const watchEstadoCivil = watch('estadoCivil')

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome: </label>
        <input name='nome' ref={register({ required: true })} placeholder='Digite seu nome...' />
        {errors.nome && 'Nome é obrigatório!'}<br/>

        <label>Cidade: </label>
        <input name='cidade' ref={register} placeholder='Digite sua cidade aqui...'/><br/>

        <label>E-mail: </label>
        <input type='email' name='email' ref={register({ required: true })} placeholder='Digite seu e-mail aqui...' />
        {errors.email && 'E-mail é obrigatório!'}<br/>

        <label>Idade: </label>
        <input name='idade' type='number' ref={register({ required: true, min: 18 })} placeholder='Digite sua idade aqui...'/>
        {errors.idade && 'Menores de 18 anos não podem entrar!'}<br/>

        <span>Estado Civil</span><br/>
        <label>Solteiro</label>
        <input name='estadoCivil' type='radio' value='solteiro' ref={register({ required: true })} /><br/>

        <label>Casado</label>
        <input name='estadoCivil' type='radio' value='casado' ref={register} />
        {watchEstadoCivil === 'casado' && (
          <div>
            <label>Cônjuge?</label>
            <input type='text' name='conjuge' ref={register({ required: true})} />
          </div>
        )}<br/>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Form
