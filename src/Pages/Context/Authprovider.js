import React, { createContext } from 'react';
import useFirebase from '../UseFirebase/useFirebase';

export const AuthContext=createContext();

const Authprovider = ({children}) => {
    const allContent=useFirebase();
    return (
        <AuthContext.Provider value={allContent}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;