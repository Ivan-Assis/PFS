import Cumprimento2 from "./components/Cumprimento2";
export default function Home() {
  return (
    <div className="text-3xl text-blue-600 font-bold">
      <p>Olá mundo!</p>
      <Cumprimento2 />
      <div>
        <label htmlFor="entrada">
          <p>Escreve dentro:</p>
        </label>
        <input type="text" id="entrada" />
      </div>
    </div>
  );
}
