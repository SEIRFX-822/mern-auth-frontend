import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function User({ user }) {

    const [redirect, setRedirect] = useState(false);
    const router = useRouter();

    function addUserData() {
        // add email to localStorage
        if (typeof window !== 'undefined') {
            console.log('Currently on Client side')
            localStorage.setItem('email', user.email);
        } else {
            console.log('Currently on Server Side');
        }
        
        // set redirect to true
        setRedirect(true);

    }

    if (redirect) { router.push('/users/profile') }

    return (
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.jobTitle}</td>
            <td onClick={addUserData}>{user.email}</td>
        </tr>
    )
}