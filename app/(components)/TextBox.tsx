import React from 'react';

const TextBox : ({ message, title, time, sender }: { message:string, title?:string | null, sender?:string, time?:string }) => JSX.Element = ({ message, title, time, sender }) => {
  return (
    <div className={`flex ${ sender === 'bot' ? 'justify-start' : 'justify-end' }`}>
      <div className="bg-white rounded-[10px] p-2.5 mb-5 w-fit max-w-[380px]">
        <p className="text-[14px]">{ title }</p>
        <p className="text-[14px]">{ message }</p>
        <p className="text-end text-[#797979] text-[12px]">{ time }</p>
      </div>
    </div>
  );
};

export default TextBox;
