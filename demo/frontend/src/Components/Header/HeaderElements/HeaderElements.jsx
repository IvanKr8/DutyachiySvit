import React, { useState } from 'react';
import { ReactComponent as Arrow} from "./images/arrow.svg"

function CollapsibleBlock({ img, title }) {

    return (
        <div>
            <article onClick={toggleBlock} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <img src={img} alt={title} style={{ marginRight: '10px' }} />
                <h1>{title}</h1>
            </article>
        </div>
    );
}

export default CollapsibleBlock;