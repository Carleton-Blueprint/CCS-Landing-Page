import React, { useState } from 'react'
import ToastContext from './ToastService';

const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);

    const open = (component, timeout = 4000) => {
        const id = Date.now();
        setToasts(toasts => [...toasts, {id, component}])
        setTimeout(() => close(id), timeout)
    }

    const close = (id) => { setToasts(toasts => toasts.filter(toast => toast.id !== id)) }

    return (
    <ToastContext.Provider value={{ open, close }}>
        {children}
        <div className='container space-y-2 absolute bottom-4 right-4'>
            {toasts.map(({id, component}) => (
                <div key={id} className="relative">
                    <button 
                        className="absolute top-2 right-2 p-1"
                        onClick={() => close(id)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48" id="close">
                            <path fill="#8E6C6A"d="M38 12.83 35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                    </button>
                    {component}
                </div>
            ))}
        </div>
    </ToastContext.Provider>
    )
}

export default ToastProvider