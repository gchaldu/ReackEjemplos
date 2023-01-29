import { useEffect, useState } from 'react'

export const ApiWP = () => {
    const url = `https://nombre-sitio/wp-json/wp/v2/posts?_embed`;
    const [articulos, setArticulos] = useState([]);

    const fechtApi = async () => {
        const respuesta = await fetch(url);
        const art = await respuesta.json();
        let [...articulos] = art;
        setArticulos(articulos);
    }
    useEffect(() => {
        fechtApi();
    }, [])

    return (
        <>
            {
                <div className='container'>
                    {
                        articulos.map((articulo) => {
                            const { id, content: { rendered }, title, ...resto } = articulo;
                            const imgApi = resto._embedded['wp:featuredmedia']['0'].source_url;
                            const hhtml = rendered;
                            return (
                                <>
                                    <div className="card" key={id}>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{title.rendered}</h5>
                                            <img src={imgApi} className='card-img-top' />
                                            <p className='card-text' dangerouslySetInnerHTML={{ __html: hhtml }}></p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}
