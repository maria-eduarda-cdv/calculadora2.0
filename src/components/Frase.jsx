import React, {useState} from 'react';

function Frase() {
    const[state, setState] = useState('Olá mundo');

    return <>
     <input value={state}
     onChange= {(event) => setState(event.target.value)
     }

     />
     <p>
        <strong>Seu texto; </strong>
        {state}
     </p>
     </>
}

export default Frase;