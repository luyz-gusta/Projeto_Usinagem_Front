'use strict'

// import { carregarCardDescription } from "./description.js"
// import { carregarCardVarinha } from "./varinha.js"

import {btn} from'./horario.js'

const routes = {
    '/materia' : {
                        html : '/pages/materia.html',
                        // js : carregarCardMateria
    },
    '/areaAluno'     : {
                        html : '/pages/areaAluno.html',
                        // js : carregarCardAreaAluno
    },
    '/horario'     : {
                        html : '/pages/horario.html',
                        // js : carregarCardHorario
    },
    '/relatorio'     : {
                        html : '/pages/relatorio.html',
                        // js : carregarCardRelatorio
    }
}

const route = async() => {
    // não permite passar para outra página
    window.event.preventDefault()

    //passar pela url sem alterar a pagina
    window.history.pushState({}, "", window.event.target.href)

    //pegando o valor do href que é passado lá no index
    const path = window.location.pathname
    console.log(window.location.pathname);

    //pega a posição path que são alguma das paginas
    const response = await fetch(routes[path].html)
    
    const html = await response.text()

    document.getElementById('root_aluno').innerHTML = html

   // routes[path].js()

    if(window.location.pathname == '/horario'){
        console.log('chegou no horario');
        btn()
    }else{
        console.log('nnnn');
    }

}

window.route = route

