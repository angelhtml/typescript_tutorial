"use client"
import Image from "next/image";
import Card from "../../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { carddata } from "../../types/cardtype";
import { useRouter } from 'next/navigation';
import Information from "../../components/Information";

export default function Home() {
  const [list, setList] = useState<any>()
  const router = useRouter()

  const [Case, setCase] = useState<any>()
  
  useEffect(() =>{
    axios({
      method: "GET",
      url: "./data.json"
    })
    .then(function (res){
      //console.log(res.data)
      setList(res.data)
    })
  },[])


  return (
    <>
    <div className="flex flex-wrap w-full gap-5 justify-center">
      {list && list.map((i : carddata) => <div key={i.id} onClick={() => setCase(i)}><Card title={i.title} description={i.description} id={i.id} image={i.image}/></div>)}
    </div>

    {Case && <Information onProductTypeChange={(i)=> setCase(i)} title={Case.title} image={Case.image}/>}
    </>
  );
}
