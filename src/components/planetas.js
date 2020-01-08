import React, { useState } from 'react'


export default function Planetas() {
    const [peso, setPeso] = useState('')
    const [pesoFinal, setPesoFinal] = useState(peso)
    const [planeta, setPlaneta] = useState("")

    return (
        <div className='container'>
            <div>
                <input type='text' className='text-white h4 text-center my-5' onChange={ (e)=> setPeso(parseFloat(e.target.value)) }></input>
            </div>
            <img onClick={(e) => (
                setPlaneta(e.target.name),
                setPesoFinal((( peso*e.target.alt )/9.8).toFixed(2))
            )}
                className='planeta mercurio'
                alt='3.7'
                name='Mercurio'
                src='https://www.elmagoarcano.com/wp-content/uploads/2017/02/2.1-Mercurio.png'
            />
            <img onClick={(e) => (
                setPlaneta(e.target.name),
                setPesoFinal((( peso*e.target.alt )/9.8).toFixed(2))
            )}
                className='planeta venus'
                alt='8.87'
                name='Venus'
                src='https://kunisan.jp/planets/venus.gif'
            />
            <img onClick={(e) => (
                setPlaneta(e.target.name),
                setPesoFinal((( peso*e.target.alt )/9.8).toFixed(2))
            )}
                className='planeta tierra'
                alt='9.80'
                name='la Tierra'
                src='https://www.ambientum.com/wp-content/uploads/2019/07/planeta-tierra-mundo-696x696.png'
            />
            <img onClick={(e) => (
                setPlaneta(e.target.name),
                setPesoFinal((( peso*e.target.alt )/9.8).toFixed(2))
            )}
                className='planeta marte'
                alt='3.71'
                name='Marte'
                src='http://3.bp.blogspot.com/-GeAeMjrP1EA/T1JnzZxVvFI/AAAAAAAAEB8/LPDlEYxuwuo/s1600/Planeta%2BMarte.%2BBlog..gif'
            />
            <img onClick={(e) => (
                setPlaneta(e.target.name),
                setPesoFinal((( peso*e.target.alt )/9.8).toFixed(2))
            )}
                className='planeta jupiter'
                alt='24.79'
                name='Jupiter'
                src='https://cdn.pixabay.com/photo/2012/04/10/17/37/planet-26617_960_720.png'
            />
            <img onClick={(e) => (
                setPlaneta(e.target.name),
                setPesoFinal((( peso*e.target.alt )/9.8).toFixed(2))
            )}
                className='planeta saturno'
                alt='10.44'
                name='Saturno'
                src='https://239f21.medialib.edu.glogster.com/ZaHmFIR5rQIEPmiGSKPQ/media/04/044bc2b45c25dd204de37f24c1e30a6e2715e70d/saturn.png'
            />
            <img onClick={(e) => (
                setPlaneta(e.target.name),
                setPesoFinal((( peso*e.target.alt )/9.8).toFixed(2))
            )}
                className='planeta urano'
                alt='8.87'
                name='Urano'
                src='http://xpaciouniversal.galeon.com/sistema_so/PLANETAS/URANO.png'
            />
            <img onClick={(e) => (
                setPlaneta(e.target.name),
                setPesoFinal((( peso*e.target.alt )/9.8).toFixed(2))
            )}
                className='planeta neptuno'
                alt='11.15'
                name='Neptuno'
                src='https://kunisan.jp/planets/neptune.gif'
            />
            <div>
                <label className='text-white pesoFinal h3 my-4'>
                    Su peso en {planeta} es : {pesoFinal} Kg
                 </label>
            </div>
        </div>
    )
}