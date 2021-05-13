import React, {useContext, useEffect, useState} from 'react';
import io, {Socket} from 'socket.io-client';

const SocketContext = React.createContext<typeof Socket | undefined>(undefined);

export function useSocket() {
    return useContext(SocketContext);
}

const SocketProvider:React.FC = ({children}) => {
    const [socket, setSocket] = useState<typeof Socket>()
    useEffect(() => {
        const newSocket = io('http://localhost:8080');
        setSocket(newSocket)
        return () => {
            newSocket.close()
        };
    },[])

    return (
        <SocketContext.Provider value={socket} >
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;