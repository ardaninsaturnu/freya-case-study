"use client"
import React, {useEffect} from 'react';
import TextBox from "@/app/(components)/TextBox";
import MessageBox from "@/app/(components)/MessageBox";
import useStore from "@/store";

const AiChat = () => {
  let { messages, setMessages } = useStore( state => state );

  useEffect(() => {
    if( messages?.length !== 2 && messages[ messages.length - 1 ].sender === 'client' ){
      setMessages({
        title: '',
        message: 'Sizi hemen bir bebek müşteri temsilcimizle görüştürüyorum :)',
        sender: 'bot',
        time:  '20.09'
      })
    }

  },[messages])

  return (
    <div className="h-full flex flex-col">
      <div className="text-[20px] font-semibold leading-5 px-5 py-5 border-b border-b-[#D6D6D6] border-b-1">Ai Chatbot</div>
      <div className="p-5 flex-grow">
        {
          messages?.map( ( item, index ) =>{
           return(
             <TextBox key={index} title={item?.title} message={item?.message} time={item?.time} sender={item?.sender} />
           )
          })
        }
      </div>
      <div className="mt-auto px-5 py-2.5">
        <MessageBox/>
      </div>
    </div>
  );
};

export default AiChat;
