import Image from "next/image";


export default function Cadastro (){
    return (
        <div className="flex h-screen w-screen">
        <div className="flex flex-col justify-center items-center flex-1 bg-orange-500">
          <h1 className="text-4xl text-white mb-5">Cadastro do Restaurante</h1>
          <div className="bg-white p-5 rounded-lg shadow-lg text-center mb-4">
            <form className="w-full max-w-md mx-auto">
              <label className="block mb-2 text-left text-gray-700">
                Razão Social <span className="text-red-500">*</span>
                <input type="text" name="razaoSocial" placeholder="Restaurante" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"  required />
              </label>
              <label className="block mb-2 text-left text-gray-700">
                Email <span className="text-red-500">*</span>
                <input type="email" name="email" placeholder="restaurante@email.com" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"  required />
              </label>
              <div className="flex justify-between">
                <label className="block mb-2 text-left text-gray-700 w-1/2 mr-2">
                  CNPJ <span className="text-red-500">*</span>
                
                </label>
                <label className="block mb-2 text-left text-gray-700 w-1/2 ml-2">
                  Telefone <span className="text-red-500">*</span>
                </label>
              </div>
              <label className="block mb-2 text-left text-gray-700">
                Nome Fantasia <span className="text-gray-500">*opcional</span>
                <input type="text" name="nomeFantasia" placeholder="Zé Espetos" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded" />
              </label>
              <div className="flex justify-between">
                <label className="block mb-2 text-left text-gray-700 w-1/2 mr-2">
                  Senha <span className="text-red-500">*</span>
                  <input type="password" name="senha" placeholder="Senha" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded" required />
                </label>
                <label className="block mb-2 text-left text-gray-700 w-1/2 ml-2">
                  Confirmar senha <span className="text-red-500">*</span>
                  <input type="password" name="confirmarSenha" placeholder="Confirmar senha" className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"  required />
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
    )
}