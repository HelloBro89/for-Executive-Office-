import React, { useState } from 'react';
import { ListOfRhyme } from './components/List.jsx';
import { getRhymes } from './requests/requests.jsx';
import './style/styles.css';

export const App = () => {
    const [word, setWord] = useState('');
    const [list, setList] = useState([]);

    const handlerTextField = (e) => {
        const { value } = e.currentTarget;
        setWord(value);
    };

    const sendWord = async () => {
        const res = await getRhymes(word);
        setList([...res]);
        console.log(res);
    };

    return (
        <div className="container">
            <h1 className="title">Enter one word and get a rhyme</h1>
            <input type="text" value={word} onChange={(e) => handlerTextField(e)} />
            <button onClick={sendWord}>search</button>
            <ListOfRhyme rhymeList={list} />
        </div>
    );
};
