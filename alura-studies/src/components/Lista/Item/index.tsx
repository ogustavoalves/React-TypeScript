import { InterfaceTarefa } from '../../../types/ITarefa'
import style from './Item.module.scss'

interface Props extends InterfaceTarefa {

    selecionaTarefa: (tarefaSelecionada: InterfaceTarefa) => void
}

export default function Item ({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) {
    return (
        <li  className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} onClick={() => !completado && selecionaTarefa({
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
                {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
            </span>
        </li>
    )
}