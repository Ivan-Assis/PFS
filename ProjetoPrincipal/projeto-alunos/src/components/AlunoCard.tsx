import type { Aluno } from "../types/Aluno";

interface AlunoCardProps {
  aluno: Aluno;
  onRemoverAluno: (id: number) => void;
}

function AlunoCard({ aluno, onRemoverAluno }: AlunoCardProps) {
  return (
    <div>
      <h2>{aluno.nome}</h2>
      <p>Matrícula: {aluno.matricula}</p>
      <p>{aluno.curso}</p>
      <button onClick={() => onRemoverAluno(aluno.id)}>REMOVER ALUNO</button>
    </div>
  );
}

export default AlunoCard;
