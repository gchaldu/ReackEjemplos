import { useEffect, useState } from 'react'

export const ConsumirApi = () => {
    const api_key = '0a00d805c15d40c6b05cc71af56a8e37'
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;
    const [articulos, setArticulos] = useState([]);
    const fechtApi = async () => {
        const respuesta = await fetch(url);
        const art = await respuesta.json();
        setArticulos(art.articles);
    }
    useEffect(() => {
        fechtApi()
    }, [])
    return (
        <>
            {<div className='container'>

                {
                    articulos.map((todo, index) => {
                        return (
                            <>
                                <div className="card" key={index}>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{todo.title}</h5>
                                        <img src={todo.urlToImage} className='card-img-top' />
                                        <p className='card-text'>{todo.description}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>}
        </>
    )
}
