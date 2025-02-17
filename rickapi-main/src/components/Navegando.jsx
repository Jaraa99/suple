import React from 'react'

export const Navegando = ({ prev, next, onPrevious, onNext }) => {
    const handlePrevious = () => {
        onPrevious();
    }
    const handleNext = () => {
        onNext();
    }

    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-center'>
                {prev ? (
                    <li className='page-item'>
                        <button
                            className='page-link'
                            style={{ backgroundColor: 'blue', color: 'white' }}
                            onClick={handlePrevious}
                        >
                            Anterior
                        </button>
                    </li>
                ) : null}
                {next ? (
                    <li className='page-item'>
                        <button
                            className='page-link'
                            style={{ backgroundColor: 'green', color: 'white' }}
                            onClick={handleNext}
                        >
                            Siguiente
                        </button>
                    </li>
                ) : null}
            </ul>
        </nav>
    )
}
