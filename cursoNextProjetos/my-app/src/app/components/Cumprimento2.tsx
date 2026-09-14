export default function Cumprimeto2(){
    const data = new Date()

    if(data.getHours() < 12)
    {
        return "Bom dia!"
    }
    else if (data.getHours() < 18)
    {
        return "Boa tarde!"
    }
    else{
        return "Boa noite!"
    }
}