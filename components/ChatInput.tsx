"use client"

import { Send } from "lucide-react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import {type useChat} from "ai/react"

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"]
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"]
type SetInput = ReturnType<typeof useChat>["setInput"]

interface ChatInputProps{
    input : string,
    handleInputChange: HandleInputChange,
    handleSubmit:HandleSubmit,
    setInput: SetInput
}

const ChatInput = ({input,handleInputChange,handleSubmit,setInput} : ChatInputProps) => {
  return (
    <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2x; xl:max-w-3xl">
            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                <div className="relative flex flex-col w-full flex-grow p-4">
                    <form onSubmit={handleSubmit} className="relative flex flex-row justify-center items-center gap-4">
                        <Textarea 
                        placeholder="Type your question here..." 
                        className="resize-none bg-zinc-800" 
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if(e.key === "Enter" && !e.shiftKey){
                                e.preventDefault()
                                handleSubmit()
                                setInput("")
                            }
                        }}/>
                        <Button  
                        className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2 cursor-pointer gap-2" type="submit" variant={"ghost"}> Ask <Send className="size-4"/></Button>
                    </form>
                </div>
            </div>
      </div>
    </div>
  )
}

export default ChatInput
