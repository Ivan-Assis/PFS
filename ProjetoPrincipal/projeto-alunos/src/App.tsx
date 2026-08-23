import type { Aluno } from "./types/Aluno";
import AlunoCard from "./components/AlunoCard";
import { useState } from "react";
//no caso aqui vc so criou um array de alunos e fez o que em outras linguagens seria um foreach, mas aqui é map
//declarou o array
const alunosIniciais: Aluno[] = [
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

  function removerAluno(id: number)
  {
    setAlunos(alunos.filter(aluno) => aluno.id !== id);
  }


  const [alunos, setAlunos] = useState<Aluno[]>(alunosIniciais);
  return (
    <main>
      <h1>Lista de Alunos</h1>
      <div>
        {alunos.map((aluno) => (
          <AlunoCard key={aluno.id} aluno={aluno} onRemover={removerAluno}/>
        ))}
        <button onClick={() => onRemover(aluno.id)}>Remover</button>
      </div>
    </main>
  );
}

export default App;
