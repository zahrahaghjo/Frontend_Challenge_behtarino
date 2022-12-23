import { useEffect, useState } from "react";
import { Row,Col,Button} from "react-bootstrap";
import ProCard from "../../components/ProCard";
import Loading from "../../components/Loading";
import Head from 'next/head'
import Container from 'react-bootstrap/Container';


function Product(props){
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const fetchData=()=>{
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json()).then(json=>{
            setLoading(false)
            setData(json)
        })
        .catch((err) => {
    
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    
    return(
        <>
      <Head>
        <title>SHOPPING</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="SHOPPING WEBSITE" />
      </Head>
      {
          loading?
            <Loading/>
        :
     
      <Container>
            <Row className="border-bottom pb-3 mt-3">
                <Col xl={9} md={12} className="d-flex justify-content-start align-items-center">
                    <h4 className="mt-2">PRODUCTS</h4>
                </Col>
                <Col xl={3} md={12}>
                    <div className="d-flex direction-column justify-content-end">
                        <Button variant="link" className="text-decoration-none text-dark d-flex">
                            HIDE FILTERS 
                        </Button>
                        <Button variant="link" className="text-decoration-none text-dark d-flex">
                            SORT BY
                        </Button>
                    </div>
                </Col>

            </Row>
            <Row className="py-3">
                {
                    data.map((item,index)=>{
                        return(
                            <ProCard key={index} item={item} />
                        )

                    })
                }
            </Row>
            </Container>
             }
    </>
    )
}
export default Product
  