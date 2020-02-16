import React from 'react';
import { Router } from "@reach/router";
import EditProduk from './edit';
import GridProduk from './grid';

const Produk = () => {
    return (
        <div>
            <Router>
                <EditProduk path="/produk/edit/:produk:id" />
                <GridProduk />
                <p>sadsasd</p>
            </Router>
        </div>
    );
};

export default Produk;