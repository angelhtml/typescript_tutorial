"use client"
import Image from "next/image";
import Fatch from "../../components/fatch";
import Card from "../../components/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { content } from "../../types/content";
import Navbar from "../../components/navbar";

export default function Home() {
  const [data, setData] = useState<content[]>()

  useEffect(() => {
    axios({
      method:"GET",
      url: "/api/hello"
    })
    .then( function (res){
      setData(res.data.data)
      
    })

  },[])

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <Navbar onProductTypeChange={(i) => console.log(i)}/>
      <Fatch />
      <input onChange={handleChange} placeholder="enter"/>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
      {data && data.map((i : content) => (
        <Card key={i.id} title={i.title} id={i.id} userId={i.userId} completed={i.completed}/>
      ))}
      </div>
    </div>
  );
}
