'use strict'

import { getTodosCursos } from "../js/api/professor_curso.js"

const turmas = await getTodosCursos()

const criarCard = (turma) => {

    const card = document.createElement('div')
    card.classList.add('card_turmas')

    //dentro do card terá?
    const sigla = document.createElement('h1')
    sigla.textContent = turma.sigla

    const semestre = document.createElement('span')
    semestre.textContent = turma.descricao

    const data_termino = document.createElement('span')
    data_termino.textContent = turma.carga_horaria

    const editar_excluir = document.createElement('div')
    editar_excluir.classList.add('editar_excluir_turmas')

    const editar = document.createElement('a')
    editar.classList.add('far')
    editar.classList.add('fa-edit')

    const excluir = document.createElement('a')
    excluir.classList.add('fas')
    excluir.classList.add('fa-trash')

    card.append(sigla, semestre, data_termino, editar_excluir)
    editar_excluir.append(editar, excluir)

    return card
}

export const carregarCardTurmas = () => {
    const cards = document.querySelector('.cards_turmas')
    const cardsJSON = turmas.cursos.map(criarCard)
    //console.log(cards);

    cards.replaceChildren(...cardsJSON)
}