import hamburgueria from "../assets/hamburgueria.png"
import nuKenzie from "../assets/nu-kenzie.png"
import kenzieHub from "../assets/kenziehub.png"
import vercelIcon from "../assets/vercelIcon.png"
import githubIcon from "../assets/githubIcon.svg"

export const projects = [
  {
    id: 0,
    name: "Hamburgueria",
    description: "O objetivo desse projeto em questão era implementar um conjunto de funcionalidades e estilização a um projeto já existente. Usando a API para para simularmos  um carrinho de compras e também praticar o conhecimento que foi adquirido até aquela parte do curso.",
    img: hamburgueria,
    vercelIcon: vercelIcon,
    githubIcon: githubIcon,
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/hamburgueria-Alex-sampaio-lima",
    vercel: "https://hamburgueria-alex-sampaio-lima.vercel.app/",
  },
  {
    id: 1,
    name: "Nu Kenzie",
    description: "O projeto tinha como objetivo principal criar uma aplicação com o gerenciamento de gastos, cadastrando a entrada e as saídas.",
    img: nuKenzie,
    vercelIcon: vercelIcon,
    githubIcon: githubIcon,
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/nu-Kenzie-Alex-sampaio-lima",
    vercel: "https://nu-kenzie-alex-sampaio-lima.vercel.app/",
  },
  {
    id: 2,
    name: "Kenzie Hub (Refatoração)",
    description: "O foco desse projeto era refatorar a lógica criada no projeto anterior para a arquitetura de contexto, e refinar o mecanismo de autenticação de usuário, para conseguir implementar por completo, uma autenticação segura e consistente.",
    img: kenzieHub,
    vercelIcon: vercelIcon,
    githubIcon: githubIcon,
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/hamburgueria-Alex-sampaio-lima",
    vercel: "https://kenziehub-cadastro-e-login-alex-sampaio-lima.vercel.app/",
  },
]
