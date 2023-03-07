
import React from 'react'
const Loader = () => {
    return (
        <div className="container-fluid col-md-4 text-center loading-screen">
            <div className='text-center' style={{ width: '100%', height: '100%' }}>
                <div className="spinner-border spinner-border-sm spinner text-success" style={{ width: '30px', height: '30px', marginTop: '300px' }} role="status">

                </div>
                <p className='text-center text-success'>
                    Loading...
                </p>
            </div>
        </div>
    );
}

export default Loader;