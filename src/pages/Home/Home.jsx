
import Nav from '../../components/Nav'
import NavItem from '../../components/NavItem'
import Display from '../../components/Display';
// import Link from 'next/link'
import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';

function Home() {
    
    const [user, loading] = useAuthState(auth);

    return (
            <div  className="">
                <div className=" flex flex-row-reverse divide-y divide-slate-100">
                    <Nav>
                        <NavItem href="/new" >New Releases</NavItem>
                        <NavItem href="/top">About</NavItem>
                        
                        { !user && (
                            <NavItem href="/login" isActive>Get Started</NavItem>
                        )}
                        { user && (
                            <img className="rounded-full h-10 w-10" src={user.photoURL} alt="user" />
                        )}
                        </Nav>
                </div>
                <Display />
                
            </div>
    );
}

export default Home;
