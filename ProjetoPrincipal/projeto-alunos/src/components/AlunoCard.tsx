import type { Aluno } from "../types/Aluno";

interface AlunoCardProps{
    aluno: Aluno;
}

function AlunoCard({aluno}: AlunoCardProps)
{
    return(
        <div>
            <h2>
                {aluno.nome}
            </h2>
            <p>
                MAtrícula: {aluno.matricula}
            </p>
            <p>{aluno.curso}</p>
        </div>
    )
}

export default AlunoCard;