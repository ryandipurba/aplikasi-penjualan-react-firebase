import React from 'react';
import { Router } from "@reach/router";
import Pengaturan from './pengaturan';
import Produk from './produk';
import Transaksi from './transaksi';
import Home from './home';


//komponen halaman private
const Private = () => {
    return (
        <div>
            <Router>
                <Pengaturan path="/pengaturan/" />
                <Produk path="/produk" />
                <Transaksi path="/transaksi" />
                <Home path="/" />
            </Router>

        </div>
    );
};

export default Private;