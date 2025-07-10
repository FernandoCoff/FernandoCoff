const tools = [
    { img : 'https://iuricode.com/assets/icons/html.svg', description : 'HTML é uma linguagem de marcação, onde criamos toda a estrutura da nosssa página.'},
    { img : 'https://iuricode.com/assets/icons/css.svg', description : 'CSS é uma linguagem de folha de estilo "em camadas", criada para dar estilo aos objetos em HTML.'},
    { img : 'https://iuricode.com/assets/icons/javascript.svg', description : 'JavaScript é uma linguagem de programação que nos permite a implementação de elementos dinâmicos na página.'},
    { img : 'https://iuricode.com/assets/icons/sass.svg', description : 'Sass é um pré-procassador CSS que adiciona recursos que não estão disponíveis no css de forma nativa.'},
    { img : 'https://iuricode.com/assets/icons/react.svg', description : 'React é uma biblioteca JavaScript que permite a criação e manipulão de páginás com foco em componentização.'},
    { img : 'https://iuricode.com/assets/icons/next.svg', description : 'Next.js é uma estrutura web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React.'},
    { img : 'https://iuricode.com/assets/icons/styled-components.svg', description : 'Styled-components é uma biblioteca que ultiliza o concetito CSS in JS, que permite escrever código CSS ultilizando JavaScript.'},
    { img : 'https://iuricode.com/assets/icons/tailwindcss.svg', description : 'Tailwind CSS é um Framework CSS que nos fornece classes ultilitarias com a finalidade de estilizar páginas.'},
    { img : 'https://iuricode.com/assets/icons/typescript.svg', description : 'TypeScript é um superset do JavaScript que incliu recursos que não estão presentes na linguagem de foma nativa, além de torná-la estática.'},
    { img : '../assets/img/node.svg', description : 'Node.js é um ambiente de execução JavaScript de código aberto e multiplataforma que permite executar código JavaScript no lado do servidor.'},
    { img : '../assets/img/postgree.svg', description : 'PostgreSQL é um sistema gerenciador de banco de dados relacional (SGBDR) de código aberto, robusto e extensível, conhecido por sua confiabilidade, integridade de dados e conformidade com padrões SQL.'},
    { img : '../assets/img/python.svg', description : 'Python é uma linguagem de programação versátil e de alto nível, conhecida por sua sintaxe clara e legível, amplamente utilizada em desenvolvimento web, análise de dados, inteligência artificial e automação.'}
]

const toolsContainer = document.getElementById('tools')



tools.forEach((item) =>{
    const newTool = document.createElement('div')
    newTool.className = 'tools__right__item'
    newTool.innerHTML = `<img src="${item.img}">`
    toolsContainer.appendChild(newTool)
})



const toolMsg = document.querySelectorAll('.tools__right__item')
const msg = document.getElementById('description-tool')
toolMsg.forEach((item, index) => {
    item.addEventListener('mouseover', ()=>{
        msg.innerText = tools[index].description
    })
    item.addEventListener('mouseout', ()=>{
        msg.innerText = '*Passe o cursor do mouse no card para ler*'
    })
})