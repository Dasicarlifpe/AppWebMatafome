
import Navbar from "@/app/components/Navbar";
import  Image  from "next/image";


export default function PaginaIni(){
    return(

<div>

        <Navbar/>

        <div className="bg-gray-100 flex justify-center items-center h-screen">
          <div className="w-1/2 h-screen hidden lg:block bg-orange-100">
              <img className="mt-4 mb-4 ml-4" src="/img/Matafome.png" width={100} alt="" />
              
              <div className="justify-center">
                  <div className="mb-4 ml-5 text-black ">
                    <label form="text" className="block text-black-600">Inicio</label>
                    <input type="text" className=" border border-orange-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500" autoComplete="off"/>
                  </div>

                  <div className="mb-4 ml-5 text-black">
                    <label form="text" className="block text-black-600">Fechamento</label>
                    <input type="text" className=" border border-orange-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500" autoComplete="off"/>
                  </div>
              </div>
                        
<main className=" text-white  items-end justify-center">
              
    
    <button
      className="relative group transition-all duration-200 focus:overflow-visible w-max h-max p-2 overflow-hidden flex flex-row items-center justify-center bg-orange-500 gap-2 rounded-lg border border-zinc-200 ml-4">
      <span>
        Funcionamento
      </span>
      <svg className="rotate-90 group-focus:rotate-180" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
        viewBox="0 0 24 24">
        <path fill="currentColor"
          d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z" />
      </svg>
      <div
        className="absolute shadow-lg -bottom-40 left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
        <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg text-black">
          <p>Manhã</p>
        </span>
        <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg text-black">
          <p>Tarde</p>
        </span>
        <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg text-black">
          <p>Noite</p>
        </span>
      </div>
    </button>
  </main>



          </div>
        
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-center font-semibold mb-4">Meus Produtos</h1>
        
          



        <div className="mt-6 text-center">
                    <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 px-4 w-full">Cadastrar novo produto</button>

        </div>
      </div>
    </div>

</div>

  
    )
}