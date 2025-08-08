import React, { useState } from 'react';

export default function InputExam() {
    const [greeting, setGreeting] = useState('');
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = () => {
        setGreeting(`안녕하세요, ${name}님 !`)
    }
    
    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <button onClick={handleSubmit}>제출하기</button>
            <p>{greeting}</p>
        </div>
    );
}

