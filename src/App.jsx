import Card from './components/Card'
import Aluno from './components/Aluno'

// Componente funcional (padrão React moderno)
function App() {
  const curso = 'ILP3 — React.js'
  const aula = 11

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>{curso}</h1>
      <h2>Aula {aula} — Introdução ao React</h2>

      <p>
        Este é o primeiro componente React criado com Vite.
      </p>

      <Card titulo="Virtual DOM" />
      <Card titulo="Componentes Funcionais" />
      <Card titulo="JSX" />

      <h2 style={{ marginTop: '30px' }}>Desafio — Alunos</h2>
      <Aluno nome="Ana Souza" curso="Sistemas para Internet" />
      <Aluno nome="Bruno Lima" curso="Análise e Desenvolvimento de Sistemas" />
      <Aluno nome="Carla Mendes" curso="Gestão da Tecnologia da Informação" />
    </main>
  )
}

export default App