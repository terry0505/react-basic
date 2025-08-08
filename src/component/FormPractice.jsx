import { useState } from "react";

export default function FormPractice() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = () => {
        if(name.trim() === ""){
            setGreeting('이름을 입력하세요.');
        }else {
            setGreeting(`안녕하세요, ${name}님 반갑습니다.`)
        }
        
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <button onClick={handleSubmit}>제출</button>

            <p>{greeting}</p>
        </div>
    );
}

