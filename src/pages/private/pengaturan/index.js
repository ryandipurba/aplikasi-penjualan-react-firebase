import React from 'react';
import { Router, Redirect } from "@reach/router";
// komponen halaman pengguna
import Toko from './toko';
import Pengguna from './pengguna';

const Pengaturan = () => {
    return (
        <div>
            <Router>
                <Pengguna path="/pengaturan/pengguna" />
                <Toko path="/pengaturan/toko" />
                <Redirect from="/pengaturan" to="/pengaturan/toko " />
            </Router>
            <h1>asdasdasda</h1>
        </div>
    );
};

export default Pengaturan;