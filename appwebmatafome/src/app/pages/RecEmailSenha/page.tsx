import React, { useState } from 'react';

function PasswordReset() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar o e-mail de recuperação
    console.log('E-mail enviado para:', email);
    alert('O link de recuperação foi enviado para o seu e-mail.');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="text-center mb-4">
          <img src="src\img\logo.png" alt="Logo" className="mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-orange-500">Recuperar Senha</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;



