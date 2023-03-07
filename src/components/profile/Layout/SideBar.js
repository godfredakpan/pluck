// create react component
import React from 'react'

export default function Sidebar() {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    {/* <i class="fas fa-laugh-wink"></i> */}
                </div>
                <div class="sidebar-brand-text mx-3">Actually</div>
            </a>

            <hr class="sidebar-divider my-0" />

            {/* if route is profile class should be active */}
            <li class={window.location.pathname === '/profile' ? 'nav-item active' : 'nav-item'}>
                <a class="nav-link" href="/profile">
                    <i class="fas fa-fw fa-user-alt"></i>
                    <span>Profile</span></a>
            </li>

            <li class={window.location.pathname === '/verify' ? 'nav-item active' : 'nav-item'}>
                <a class="nav-link" href="/verify">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Verify</span></a>
            </li>

        </ul>

    )
}

