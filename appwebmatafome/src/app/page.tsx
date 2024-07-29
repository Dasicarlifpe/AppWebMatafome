import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (

    

    
    <div className="min-h-screen bg-orange-500 flex flex-col justify-center sm:py-12">
      
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        
        <img src="img/Matafome.png" alt="" /> 
        <div className="bg-white shadow w-full  bg-opacity-50 rounded-lg divide-y divide--200 ">
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-white-600 pb-1 block">E-mail</label>
            <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <label className="font-semibold text-sm text-white-600 pb-1 block">Senha</label>
            <input type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <button type="button" className="transition duration-100 bg-green-500 hover:bg-green-600 focus:bg-green-700 focus:shadow-sm focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span className="inline-block mr-2">Entrar</span>
            </button>

            <button className="bg-red-500 mt-3 mb-5 rounded-lg text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-red-600 duration-100 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor"/></g></svg>
                Faça login com a conta Google
            </button>
           
            <button className="transition duration-200 right-10 cursor-pointer font-normal text-sm rounded-lg text-blue-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <a className="inline-block ml-1" href="./pages/CadastroAdmin">Não possui conta? Cadastre-se !</a>
            </button>
           
           

          </div>
          
        </div>
       
      </div>
    </div>
  

    
  );
}
