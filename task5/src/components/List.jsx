import React from 'react';
import { FixedSizeList as List } from 'react-window';
import '../style/styles.css';

export const ListOfRhyme = ({ rhymeList }) => {
    const Row = ({ index, style }) => (
        <div style={style} className={index % 2 ? 'first' : 'second'}>
            <div className="index">{index + 1}.</div>
            <div className="value">{rhymeList[index].word}</div>
        </div>
    );

    return (
        <div>
            {rhymeList.length ? (
                <List className="main_list" height={500} itemCount={rhymeList.length} itemSize={35} width={500}>
                    {Row}
                </List>
            ) : null}
        </div>
    );
};
