"use client"
import {useState} from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputVal , setInputVal]=useState("")
  const {push} =useRouter()
  const handleSubmit =(e)=>{
    e.preventDefault();
    push(`predection/${inputVal}`) 
  }
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto w-6/12 border-2 border-blue-500 rounded-lg p-5 flex flex-col items-center justify-around">
        <h1 className="mb-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Name</h1>
          <input type="text" placeholder="type your name..." value={inputVal} onChange={(e)=>setInputVal(e.target.value)} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-5">Predict Data</button>
        </form>
    </div>
  );
}
