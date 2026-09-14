export default function Post() {
  return (
    <div className="card">
      <div className="imagem">
        {imagem}
      </div>
      <div className="titulo">
        <h4>{titulo}</h4>
      </div>
      <div>
        <p>
          {descricao}
        </p>
      </div>
    </div>
  );
}
