import React from "react";
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const history = useNavigate();

    return (
        <main className="not-found">
            <div className="not-found__message">
                <h1 className="not-found__title">
                    404
                </h1>
                <p className="not-found__subtitle">
                    Страница не найдена
                </p>
            </div>
            <button type="button" onClick={() => history(-1)} className='not-found__back'>Назад</button>
        </main>
    )
}

export default NotFound;