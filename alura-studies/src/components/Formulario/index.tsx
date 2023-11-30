import React, { useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { InterfaceTarefa } from "../../types/ITarefa";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<InterfaceTarefa[]>>
    
}

function Formulario({ setTarefas } : Props) {
    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo ] = useState("00:00")
    function addTarefa (evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );

        //"limpa" o formulário após o submit
        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={addTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa"
                        value={tarefa}
                        onChange={evento => setTarefa(evento.target.value)}
                        id="tarefa" 
                        placeholder="O que você quer estudar"
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time" 
                        step="1"
                        name="tempo" 
                        value={tempo}
                        onChange={evento => setTempo(evento.target.value)}
                        id="tempo" 
                        min="00:00:01"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao type="submit">Adicionar</Botao>
                
            </form>
    )
}

export default Formulario;