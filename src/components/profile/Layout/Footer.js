import React from 'react';

export default function Footer() {
    return (
        <footer class="sticky-footer bg-white" style={{ position: 'fixed', bottom: '0' }}>
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Actually <script>document.write(new Date().getFullYear());</script></span>
                </div>
            </div>
        </footer>
    )
}