import Image from "next/image";
import Test from "../../components/test";
import Fatch from "../../components/fatch";

interface schema {
  name: string
}

export default function Home() {
  const data : schema = {
    name: "mm1"
  }
  const handleGenocideCardClick = (articleUrl : any) =>  {
    console.log("You can read about this massacre at: " + articleUrl);
}

  //console.log(typeof(data))

  return (
    <div>
      {/*<Test data={data} />*/}
      <Fatch />
    </div>
  );
}
