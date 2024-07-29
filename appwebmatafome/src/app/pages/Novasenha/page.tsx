import React, { useState } from 'react';

function NewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      setError('A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e símbolos.');
      return;
    }
    // Adicione aqui a lógica para salvar a nova senha
    console.log('Nova senha salva:', password);
    alert('Sua senha foi alterada com sucesso.');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="text-center mb-4">
          <img src="src\img\logo.png" alt="Logo" className="mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-orange-500">Nova Senha</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            name="password"
            placeholder="Digite sua nova senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua nova senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
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

export default NewPassword;
