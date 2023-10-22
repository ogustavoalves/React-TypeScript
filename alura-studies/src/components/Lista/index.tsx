import style from './Lista.module.scss'
import Item from './Item'
import { InterfaceTarefa } from '../../types/ITarefa';



function Lista ({tarefas}: {tarefas: InterfaceTarefa[]}) {

    

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}

            </ul>
        </aside>
    )
}

export default Lista;