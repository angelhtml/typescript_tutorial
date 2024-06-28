"use client"
import { useState } from 'react';

interface schema {
    data : any 
}

interface IGenocideCardProps {
    onCardClick: any;
}

const HinduMassacre = {
    name: "Mirpur Massacre",
    image: "https://www.dailyexcelsior.com/wp-content/uploads/2020/11/1-176.jpg",
    url: "https://hindugenocide.com/islamic-jihad/mirpur-massacre-of-hindus-and-sikhs-1947/"
}

export default function Test(data : schema, props: IGenocideCardProps ){
    console.log(data)

    const [username, setUsername] = useState<string>('');

    const handleInputChange = 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
        };
    
    return(
        <div>
            {data.data.name}
            {username}
            <input type="text" value={username} 
                onChange={handleInputChange} 
                placeholder="Enter your username" />
                <button  onClick={() => props.onCardClick(HinduMassacre.name)} >test</button>
        </div>
    )
}