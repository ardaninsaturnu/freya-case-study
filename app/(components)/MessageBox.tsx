"use client"
import React from 'react';
import { Textarea } from "@/components/ui/textarea"
import useStore from "@/store";

function MessageBox() {
  const { setMessage, sendMessage } = useStore(state => state );

  return (
    <div className="flex gap-2.5 max-w-full overflow-hidden">
      <div className=""></div>
      <Textarea className="w-full border border-solid border-[#D6D6D6] !bg-[#F7F7F7]" placeholder="Type your message here." onChange={(e) => setMessage({
        title: null,
        message: e.target.value,
        sender: 'client',
        time: Date

      })} />
      <button className="w-10 h-10 bg-[#E14621] flex justify-center items-center rounded-[10px]" onClick={sendMessage}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.7593 2.24065C17.6021 2.08357 17.4059 1.97122 17.1908 1.9152C16.9758 1.85917 16.7497 1.86148 16.5358 1.9219H16.5241L1.52879 6.4719C1.28469 6.5421 1.06777 6.68499 0.906913 6.88155C0.746054 7.07811 0.64889 7.31901 0.628359 7.57217C0.607828 7.82533 0.664904 8.07873 0.791988 8.29864C0.919072 8.51855 1.11013 8.69453 1.33973 8.80315L8.02879 11.9711L11.1968 18.6602C11.2968 18.8744 11.456 19.0555 11.6556 19.1822C11.8552 19.3088 12.0869 19.3758 12.3233 19.375C12.3593 19.375 12.3952 19.3735 12.4311 19.3703C12.6834 19.3499 12.9234 19.2528 13.1189 19.0921C13.3144 18.9314 13.4561 18.7147 13.5249 18.4711L18.0718 3.47581C18.0718 3.4719 18.0718 3.46799 18.0718 3.46409C18.133 3.25078 18.1363 3.02502 18.0813 2.81001C18.0264 2.595 17.9153 2.39848 17.7593 2.24065ZM12.3304 18.1133L12.3264 18.1242L9.25145 11.6328L12.9421 7.94143C13.0543 7.82327 13.116 7.66592 13.1139 7.50295C13.1118 7.33997 13.0462 7.18426 12.9309 7.06901C12.8157 6.95376 12.6599 6.88809 12.497 6.886C12.334 6.88391 12.1766 6.94557 12.0585 7.05784L8.36707 10.7485L1.87488 7.67346H1.88582L16.8749 3.12502L12.3304 18.1133Z" fill="white"/>
        </svg>
      </button>
    </div>
  );
}

export default MessageBox;
