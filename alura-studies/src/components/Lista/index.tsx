import style from './Lista.module.scss'
import Item from './Item'
import { InterfaceTarefa } from '../../types/ITarefa';

interface Props {
    tarefas: InterfaceTarefa[],
    selecionaTarefa: (tarefaSelecionada: InterfaceTarefa) => void
}

function Lista ({tarefas, selecionaTarefa}: Props) {

    

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item 
                        selecionaTarefa = {selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}

            </ul>
        </aside>
    )
}

export default Lista;