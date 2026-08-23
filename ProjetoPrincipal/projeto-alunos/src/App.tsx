import type { Aluno } from "./types/Aluno";
import AlunoCard from "./components/AlunoCard";
//no caso aqui vc so criou um array de alunos e fez o que em outras linguagens seria um foreach, mas aqui é map
//declarou o array
const alunos: Aluno[] = [
  {
    id: 1,
    nome: "nome 1",
    matricula: 1,
    curso: "curso 1",
  },
  {
    id: 2,
    nome: "nome 2",
    matricula: 2,
    curso: "curso 2",
  },
  {
    id: 3,
    nome: "nome 3",
    matricula: 3,
    curso: "curso 3",
  },
];

function App() {
  return (
    <main>
      <h1>Lista de Alunos</h1>
      <div>
        {alunos.map((aluno) => (
          <AlunoCard key={aluno.id} aluno={aluno} />
        ))}
      </div>
    </main>
  );
}

export default App;
