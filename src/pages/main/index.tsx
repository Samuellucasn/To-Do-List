import React, {useState} from 'react';
import Button from  '../../components/button'
import './style.css'

function Main() {
    const [inputValue, setInputValue] = useState('')
    const [list, setList] = useState<string[]>([])

    const randleAddClick = () => {setList([...list,inputValue])}

    const randleClean = () => {setList([])}

    return (
        <div className='container'>
            <h1>To Do list</h1>
            <div className="form-group">
                <input className='input-tarefas' type="text" placeholder='Adicione sua tarefa' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <Button onClick={randleAddClick}>+</Button>
            </div>
            <div className="to-do-List">
                <ul className='group-list'>
                    {list.map((valor) => (
                        <li className='list'>
                            {valor}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="clean">
                <Button onClick={randleClean}>
                    Clean
                </Button>
            </div>
        </div>
    )
}

export default Main