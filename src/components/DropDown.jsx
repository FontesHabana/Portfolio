import { div } from "framer-motion/client";
import React, { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseLeave={() => !isOpen && setIsOpen(false)}
        className={`group relative h-12 w-28 text-black flex items-center justify-start gap-3 rounded-full overflow-hidden transition-all duration-300 active:scale-95  ease-in-out hover:bg-white transition ${
          isOpen ? "bg-white" : "bg-[#efefff]"
        } `}
      >
        <div className="relative h-5 overflow-hidden">
          <div
            className={`
            px-4 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
            ${isOpen ? "-translate-y-1/2" : "translate-y-0"}
          `}
          >
            <span className="h-5 flex items-center justify-center font-bold text-black  tracking-[0.2em] text-[14px] uppercase">
              Menu
            </span>
            <span className="h-5 flex items-center justify-center font-bold text-black tracking-[0.2em] text-[14px] uppercase">
              Close
            </span>
          </div>
        </div>

        {/* ANIMACIÓN DE LOS DOS PUNTOS */}
        <div className="absolute right-5 size-3 flex items-center justify-center">
          {/* Punto 1 */}
          <span
            className={`
            absolute w-[4.60px] h-[4.60px] bg-black rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
            ${
              isOpen
                ? "-translate-y-1 translate-x-0"
                : "translate-y-0 -translate-x-1   group-hover:-translate-y-1 group-hover:translate-x-0 "
            }
          `}
          ></span>

          {/* Punto 2 */}
          <span
            className={`
            absolute w-[4.60px] h-[4.60px] bg-black rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
            ${
              isOpen
                ? "translate-y-1 translate-x-0"
                : "translate-y-0 translate-x-1   group-hover:translate-y-1 group-hover:translate-x-0"
            }
          `}
          ></span>
        </div>
      </button>

      {/* MENÚ DESPLEGABLE CON ANIMACIÓN DE CARTA */}
      <div
        className={`
          absolute right-0 mt-3 w-70 p-3 bg-white rounded-[1rem] shadow-2xl ring-1 ring-black/5
          text-2xl uppercase
          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-top-right
          
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 visible"
              : "opacity-0 -rotate-5 translate-y-10 invisible"
          }
        `}
      >
        <div className="pt-1 pb-3 flex flex-col gap-1  ">
          <a
            href="#"
            className="py-1 my-1 relative h-12 overflow-hidden text-black hover:bg-blue-100 hover:scale-105 rounded-full transition-colors"
          >
            <div className="px-4   flex flex-col transition-transform duration-500 hover:-translate-y-1/2">
              <span className=" p-3 font-semibold text-black hover:bg-blue-100 rounded-full transition-colors">
                Home
              </span>
              <span className=" p-3 font-semibold mb-3 text-black hover:bg-blue-100 rounded-full transition-colors">
                Home
              </span>
            </div>
          </a>
          <a
            href="#"
            className="py-1 my-1 relative h-12 overflow-hidden text-black hover:bg-blue-100 hover:scale-105 rounded-full transition-colors"
          >
            <div className="px-4   flex flex-col transition-transform duration-500 hover:-translate-y-1/2">
              <span className=" p-3 font-semibold text-black hover:bg-blue-100 rounded-full transition-colors">
                About
              </span>
              <span className=" p-3 font-semibold mb-3 text-black hover:bg-blue-100 rounded-full transition-colors">
                About
              </span>
            </div>
          </a>
          <a
            href="#"
            className="py-1 my-1 relative h-12 overflow-hidden text-black hover:bg-blue-100 hover:scale-105 rounded-full transition-colors"
          >
            <div className="px-4   flex flex-col transition-transform duration-500 hover:-translate-y-1/2">
              <span className=" p-3 font-semibold text-black hover:bg-blue-100 rounded-full transition-colors">
                Projects
              </span>
              <span className=" p-3 font-semibold mb-3 text-black hover:bg-blue-100 rounded-full transition-colors">
                Projects
              </span>
            </div>
          </a>
          <a
            href="#"
            className="py-1 my-1 relative h-12 overflow-hidden text-black hover:bg-blue-100 hover:scale-105 rounded-full transition-colors"
          >
            <div className="px-4   flex flex-col transition-transform duration-500 hover:-translate-y-1/2">
              <span className=" p-3 font-semibold text-black hover:bg-blue-100 rounded-full transition-colors">
                Contact
              </span>
              <span className=" p-3 font-semibold mb-3 text-black hover:bg-blue-100 rounded-full transition-colors">
                Contact
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
