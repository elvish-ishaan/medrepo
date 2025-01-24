import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Mail } from "lucide-react";
import { HeroChart } from "../charts/HeroChart";
import Highlighted from "../Highlighted";

export function GridBack() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" flex flex-col items-center">
            <p className=" text-zinc-400">Get 7-days free trial</p>
          <h1 className=" text-8xl font-semibold tracking-wide">All In One Solution</h1>
          <h2 className=" text-7xl font-semibold tracking-wide">For Your <Highlighted text="HEALTH" size="text-6xl"/></h2>
          <p className=" text-slate-300 text-center mt-5 w-1/2">MedRepo is your one-stop solution for managing your health journey
             with ease and efficiency.</p>
           <div className=" flex gap-2 mt-8 items-center">
            <Mail className=" size-10"/>
             <Input placeholder="example@email.com"/>
             <Button>Join Now</Button>
           </div>
          </div>
           <div className=" w-1/3">
             <HeroChart/>
           </div>
    </div>
  );
}
