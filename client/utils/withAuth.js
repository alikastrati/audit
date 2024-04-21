import {useRouter} from 'next/router';
import { useEffect } from 'react';


// HOC (Higher Order Component ) for the Login/Register Pages 
const withAuth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const router = useRouter();


        // Check If JWT token is stored in cookies
        useEffect(() => {
            const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='))?.split('=')[1];

            if(token) {
                router.push('/');
            }
        }, []);


        return <WrappedComponent {...props} />;
    }

    return AuthComponent;
};

export default withAuth;