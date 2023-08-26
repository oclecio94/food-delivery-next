import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicioso Hambúrguer e Batata Frita
        </h1>
        <p className="text-white xl:text-xl">
          Apresentamos o irresistível hambúrguer gourmet "King Burguer"
          disponível em nosso site! Este delicioso hambúrguer é uma verdadeira
          explosão de sabores que vai levar sua experiência gastronômica a um
          patamar superior.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Pedir Agora
        </button>
      </div>

      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
