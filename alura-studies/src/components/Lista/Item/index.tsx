import { InterfaceTarefa } from '../../../types/ITarefa'
import style from '../Lista.module.scss'

interface Props extends InterfaceTarefa {

    selecionaTarefa: (tarefaSelecionada: InterfaceTarefa) => void
}

export default function Item ({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) {
    console.log('item atual: ', {tarefa, tempo, selecionado, completado, id});
    return (
        <li  className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
             <h3>
                {tarefa}
             </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}