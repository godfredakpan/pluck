/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import './TopBar.css';
import UserLogo from '../../../assets/logo-mark.png'
import { useAuth0 } from "@auth0/auth0-react";
export default function TopBar() {

    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    const { loginWithPopup, } = useAuth0();

    function logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <ToastContainer />

            <ul class="navbar-nav">
                <li>
                    <a href="/" class="navbar-brand">
                        <img
                            src={UserLogo}
                            style={{ width: '50px', height: '50px', marginTop: '10px' }}
                            className="app-logo"
                            alt="Logo"
                        />
                    </a>
                </li>
                {localStorageUser && (
                    <li class={window.location.pathname === '/profile' ? 'nav-item active' : 'nav-item'}>
                        <a class="nav-link" href="/profile">
                            <i class="fas fa-fw fa-user-alt"></i>
                            <span>Profile</span></a>
                    </li>
                )}

            </ul>


            <ul class="navbar-nav ml-auto">

                <li class="nav-item dropdown no-arrow d-sm-none">

                </li>


                <div class="topbar-divider d-none d-sm-block"></div>

                {!localStorageUser && (
                    <li class={'nav-item'}>
                        <button class="nav-link btn" onClick={() => loginWithPopup()}>
                            <i class="fas fa-fw fa-user-alt"></i>
                            <span>Sign In</span></button>
                    </li>
                )}

                {!localStorageUser && (
                    <li class={'nav-item'}>
                        <button class="nav-link btn" onClick={() => loginWithPopup()}>
                            <i class="fas fa-fw fa-user-alt"></i>
                            <span>Sign Up</span></button>
                    </li>
                )}

                <li class="nav-item dropdown no-arrow">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">{localStorageUser?.name}</span>
                        <img alt="" class="img-profile rounded-circle"
                            src={localStorageUser?.picture} />
                    </a>

                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a class="dropdown-item" href={'/profile'}>
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>

                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/#" onClick={logout} data-toggle="modal" data-target="#logoutModal">
                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>

            </ul>

        </nav>
    )
}