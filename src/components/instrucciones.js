import React from 'react'
import { Card } from 'react-bootstrap'

export default function Instrucciones() {
    return(
        <div className='container'>
            <Card bg="secondary" text="white" className='text-center my-4' >
                <Card.Body>
                    <Card.Title>
                        Bienvenido
                    </Card.Title>
                    <Card.Text>
                        Para saber cual es su peso en los distintos planetas del sistema solar
                        ingrese su peso en Kilogramos y luego haga click en un planeta.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}