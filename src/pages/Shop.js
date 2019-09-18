import React, { useState } from 'react'

const Shop = () => {
    const [brands] = useState([
        { Brand: "Nike" },
        { Brand: "Adidas" },
        { Brand: "Puma" },
        { Brand: "Asics" },
        { Brand: "Hummel" }
    ]);
    const [shoes] = useState([
        { url: 'shoe1.jpg', caption: "Puma Highland 3000 - Brown" },
        { url: 'shoe2.jpg', caption: "Asics Free Street" },
        { url: 'shoe3.jpg', caption: "New Balance Runner Bounce" },
        { url: 'shoe4.jpg', caption: "New Balance New York 2018" },
        { url: 'shoe1.jpg', caption: "Puma Highland 3000 - Brown" },
        { url: 'shoe4.jpg', caption: "New Balance New York 2018" }
    ])
    const BrandList = brands.map(brand => {
        return (
            <div className="brandName" key={Math.random()}>
                <p className="text-decoration-none">{brand.Brand}</p>
            </div>
        )
    })
    const ProductList = shoes.map(shoe => {
        return (
            <div className="product" key={Math.random()}>
                <img src={"../../img/" + shoe.url} alt={shoe.caption} className="img-fluid d-flex" />
                <p>{shoe.caption}</p>
            </div>
        )
    })
    return (
        <div className="Shop row">
            <section className="shopNav bg-yellow d-flex justify-content-center col-12 col-md-3 p4">
                <div className="d-flex flex-column justify-content-center">
                    <div className="shopInfo mt4">
                        <h3>SHOP</h3>
                        <h4>RUNINC SHOP</h4>
                        <p>Gratis fragt ved over 500.-</p>
                    </div>
                    {BrandList}
                </div>
            </section>
            <section className="products d-flex col-12 col-md-9">
                <h2 className="text-white">Shop</h2>
                {ProductList}
            </section>
        </div>
    );
}

export default Shop;