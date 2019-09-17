import React, { useState } from 'react'

const Shop = () => {
    const [brands] = useState([
        { Brand: "Nike"},
        { Brand: "Adidas"},
        { Brand: "Puma"},
        { Brand: "Asics"},
        { Brand: "Hummel"}
    ]);
    const BrandList = brands.map(brand => {
        return (
            <div className="brandName" key={Math.random()}>
                    <p className="text-decoration-none">{brand.Brand}</p>
            </div>
        )
    })
    return (
        <div className="Shop">
            <section className="shopNav">
                <div className="shopInfo">
                    <h3>SHOP</h3>
                    <h4>RUNINC SHOP</h4>
                    <p>Gratis fragt ved over 500.-</p>
                </div>
                {BrandList}
            </section>
            <section className="products"></section>
        </div>
    );
}
 
export default Shop;