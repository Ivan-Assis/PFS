export default function Cumprimento (){
  const getMensagem = () => {
    const hora = new Date().getHours();

    if(hora < 12)
    {
      return <p>Bom dia!</p>
    }

    else if(hora< 19)
    {
      return <p>Boa tarde!</p>
    }

    else{
      return <p>Boa noite!</p>
    }
  }

  return getMensagem()
}