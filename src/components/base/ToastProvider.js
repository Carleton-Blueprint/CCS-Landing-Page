import React, { useState } from 'react'
import ToastContext from './ToastService';

const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);

    const open = (component, timeout = 3000) => {
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
                    <button className="absolute top-2 right-2 p-1 rounded-lg bg-gray-200/20 text-gray-800/60">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="close">
                            <path fill="#000" d="M7.05 7.05a1 1 0 0 0 0 1.414L10.586 12 7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 0 0 1.414-1.414L13.414 12l3.536-3.536a1 1 0 0 0-1.414-1.414L12 10.586 8.464 7.05a1 1 0 0 0-1.414 0Z"></path>
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