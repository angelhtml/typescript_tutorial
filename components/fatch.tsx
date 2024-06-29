"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Fatch() {
  const [info, setInfo] = useState();
  const router = useRouter()

  useEffect(() => {
    axios({
      method: "GET",
      url: "./data.json",
    }).then(function (response) {
      console.log(response.data);
      setInfo(response.data);
    });
  }, []);

  const list: object[] = [];

  if (info) {
    info.forEach((i) => {
      list.push(
        <div onClick={() => router.push("blog/"+i.name)} class="container" key={i._id}>
          {i.name} and age is {i.age}
        </div>
      );
    });
  }

  return <div>{list}</div>;
}
