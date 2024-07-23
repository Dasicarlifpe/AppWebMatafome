import React, { useState } from 'react';
import InputMask from 'react-input-mask';

function App() {
  const [form, setForm] = useState({
    cnpj: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    razaoSocial: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const validateCNPJ = (cnpj) => {
    const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    return regex.test(cnpj);
  };

  const validateTelefone = (telefone) => {
    const regex = /^\(\d{2}\) \d \d{4}\-\d{4}$/;
    return regex.test(telefone);
  };

  const validateSenha = (senha) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(senha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.razaoSocial) {
      alert('Razão Social é obrigatória');
      return;
    }
    if (!form.email) {
      alert('Email é obrigatório');
      return;
    }
    if (!validateCNPJ(form.cnpj)) {
      alert('CNPJ inválido');
      return;
    }
    if (!validateTelefone(form.telefone)) {
      alert('Telefone inválido');
      return;
    }
    if (!validateSenha(form.senha)) {
      alert('A senha deve ter pelo menos 6 caracteres, incluindo letras maiúsculas, minúsculas e símbolos');
      return;
    }
    if (form.senha !== form.confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }
    alert('Cadastro enviado com sucesso!');
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col justify-center items-center flex-1 bg-orange-500">
        <h1 className="text-4xl text-white mb-5">Cadastro do Restaurante</h1>
        <div className="bg-white p-5 rounded-lg shadow-lg text-center mb-4">
          <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
            <label className="block mb-2 text-left text-gray-700">
              Razão Social <span className="text-red-500">*</span>
              <input type="text" name="razaoSocial" placeholder="Restaurante" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded" value={form.razaoSocial} onChange={handleChange} required />
            </label>
            <label className="block mb-2 text-left text-gray-700">
              Email <span className="text-red-500">*</span>
              <input type="email" name="email" placeholder="restaurante@email.com" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded" value={form.email} onChange={handleChange} required />
            </label>
            <div className="flex justify-between">
              <label className="block mb-2 text-left text-gray-700 w-1/2 mr-2">
                CNPJ <span className="text-red-500">*</span>
                <InputMask mask="99.999.999/9999-99" value={form.cnpj} onChange={handleChange}>
                  {(inputProps) => <input {...inputProps} type="text" name="cnpj" placeholder="92.188.040/0001-27" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded" required />}
                </InputMask>
              </label>
              <label className="block mb-2 text-left text-gray-700 w-1/2 ml-2">
                Telefone <span className="text-red-500">*</span>
                <InputMask mask="(99) 9 9999-9999" value={form.telefone} onChange={handleChange}>
                  {(inputProps) => <input {...inputProps} type="tel" name="telefone" placeholder="(81) 9 9999-9999" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded" required />}
                </InputMask>
              </label>
            </div>
            <label className="block mb-2 text-left text-gray-700">
              Nome Fantasia <span className="text-gray-500">*opcional</span>
              <input type="text" name="nomeFantasia" placeholder="Zé Espetos" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded" />
            </label>
            <div className="flex justify-between">
              <label className="block mb-2 text-left text-gray-700 w-1/2 mr-2">
                Senha <span className="text-red-500">*</span>
                <input type="password" name="senha" placeholder="Senha" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded" value={form.senha} onChange={handleChange} required />
              </label>
              <label className="block mb-2 text-left text-gray-700 w-1/2 ml-2">
                Confirmar senha <span className="text-red-500">*</span>
                <input type="password" name="confirmarSenha" placeholder="Confirmar senha" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded" value={form.confirmarSenha} onChange={handleChange} required />
              </label>
            </div>
            <p className="text-left text-gray-400 text-sm ">Campos marcados com <span className="text-red-500">*</span> são obrigatórios.</p>
            <button type="submit" className="w-full p-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600">Enviar cadastro</button>
            <button type="button" className="w-full p-2 mt-4 bg-red-500 text-white rounded hover:bg-red-600">Voltar</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 bg-white">
        <img src="src\img\logo.png" alt="Logo da Empresa" className="mb-5" />
      </div>
    </div>
  );
}

export default App;

