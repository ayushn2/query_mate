"use client"

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import {TypeAnimation} from "react-type-animation"


export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const locationSequence = [
    'Are you retarded ?',
    3000,
    'Too lazy to go through a website yourself ?',
    3000,
    'Is your dopamine cooked ?',
    3000,
    'Watched too many reels ?',
    3000,
    

]

  const handleSubmit = (e:any) => {
    e.preventDefault();
    router.push("/" + input);
    setInput('');
  }

  return (
    <div className="p-20">
      <div className="relative flex flex-col gap-20">
        <div className="flex justify-center items-center">
          <Image src={"owl.svg"} alt="" height={150} width={150}/>
          </div>
          <div className="flex justify-center items-center fixed left-1/2 translate-x-[-50%] top-[350px] w-full text-3xl">
          <TypeAnimation
            sequence={locationSequence}
            speed={10}
            deletionSpeed={10}
            cursor={false}
            repeat={Infinity}
            
            />
            
          </div>
          <div className="mt-20">
          <form onSubmit={handleSubmit} className="relative flex flex-col justify-center items-center gap-6">
          {/* <p className="text-3xl">Don't worry , I got you princess!!!</p> */}
          <Textarea 
            placeholder="Enter the website URL..." 
            className="resize-none bg-zinc-800" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button  
            className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2 cursor-pointer gap-2" 
            type="submit" 
            variant={"ghost"}>
            Ask <Send className="size-4"/>
          </Button>
        </form>
          </div>
        
      </div>
      
    </div>
  );
}
