import Navbar from "@/app/components/Navbar";
import Image from "next/image";


export default function NovaSenha (){
    return(
    <div>
          

             <div className="flex items-center justify-center min-h-screen bg-orange-500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="text-center mb-4">
          <img src="src\img\logo.png" alt="Logo" className="mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-orange-500">Nova Senha</h2>
        </div>
        <form >
          <input
            type="password"
            name="password"
            placeholder="Digite sua nova senha"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua nova senha"
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
    </div>
       
    )
}