import type { Aluno } from "./types/Aluno";
import AlunoCard from "./components/AlunoCard";
import { useState } from "react";

const alunosIniciais: Aluno[] = [
  {
    id: 1,
    nome: "nome 1",
    matricula: 1,
    curso: "curso 1",
  },
  {
    id:2,
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
  const [alunos, setAlunos] = useState<Aluno[]>(alunosIniciais);
  const removerAluno = (id: number) => {
    setAlunos((listaSubstituida) => listaSubstituida.filter((aluno) => aluno.id !== id));
  };


  return (
    <main>
      <h1>Lista de Alunos</h1>
      <div>
        {alunos.map((aluno) => (
          <AlunoCard key={aluno.id} aluno={aluno} onRemoverAluno={removerAluno} />
        ))}
      </div>
    </main>
  );
}

export default App;
