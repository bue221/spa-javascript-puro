const API = 'https://rickandmortyapi.com/api/character/'

export default async(id) => {
    try{
        const apiUrl = id ? `${API}/${id}` : API

        const res = fetch(apiUrl);
        const data = (await res).json()
        
        return data
    }catch(err){
        console.log('No se puedo obtener la data: ',err)
    }
}