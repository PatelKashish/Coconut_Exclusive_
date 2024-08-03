import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ProdCard from '../components/Card';

const Displayall = () => {
    const [Data, setData] = useState([
        {
            productname: "",
            productid: "",
            gender: "",
            price: 0,
            brand: "",
            productimg: "",
            qty: 0
        }]);

    useEffect(() => {

        fetch("http://localhost:7000/api/display").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setData(jsonRes));

    })


    return (
        <>
            <Container style={{ top: '131px', left: '186px', width: '1120px', height: '796px', position: 'absolute', display: 'grid', gridTemplateColumns: 'auto auto auto', padding: '10px' }}>

                <Row sm="3">
                    {Data.map((product) => (

                        <Col style={{ backgroundColor: '#CAE250', border: '1px solid rgba(0, 0, 0, 0.8)', padding: '20px', fontSize: '30px', textAlign: 'center' }}>
                            <ProdCard className="flex-fill" book={product} />
                        </Col>

                    ))}

                </Row>
            </Container>


        </>
    );
};

function DisplayProd() {
    return (
        <div style={{ marginBottom: '50px' }}>
            <Displayall />
        </div>
    );
}

export default DisplayProd;