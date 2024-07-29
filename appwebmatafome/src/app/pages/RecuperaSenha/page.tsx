import Image from "next/image";

export default function RecSenha(){
    return(
        <div className="flex items-center justify-center min-h-screen bg-orange-500">
      <div className="bg-white p-20 rounded-lg shadow-lg w-50">
        <div className="text-center mb-4">
          <img src="src\img\logo.png" alt="Logo" className="mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-orange-500">Recuperar Senha</h2>
        </div>
        <form >
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
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
    )
}