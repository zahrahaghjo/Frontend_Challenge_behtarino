import Head from 'next/head'
import {Container,Row,Col} from 'react-bootstrap';
import styles from '../../styles/Product.module.css';
import Title from '../../components/Title';
import ShopBtn from '../../components/ShopBtn';



export default function Product({res}){

    return(
       <>
        <Head>
            <title>{res.item.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={res.item.description}/>
        </Head>
        <div className={`d-flex align-items-center justify-content-center ${styles.proBox}`}>
            <Col xl={8} lg={8} md={10} sm={12} className={`bg-white  mx-auto ${styles.card}`}>
                <Row className="mx-0">
                    <Col xl={4} lg={4} md={12} className={`d-flex align-items-center justify-content-center py-4 ${styles.imgBox}`} >
                        <div className={styles.img} style={{background:"url("+res.item.image+")",width:200,height:200}} />
                    </Col>
                    <Col xl={8} lg={8} md={12} className={`py-4 ${styles.textBox}`}>
                        <div className="d-flex flex-column w-100">
                            <h4>{res.item.title}</h4>
                            
                        </div>
                        <div className="fs-6 text-secondary w-100">{res.item.category}</div>
                        <div className={`w-100 fs-5 mt-2 ${styles.price}`}>${res.item.price}</div>
                        <div className="w-100 mt-4">
                            <Title title={'DESCRIPTION'} />
                        </div>
                        <div className={`w-100 ${styles.descBox}`}>
                            {res.item.description}
                        </div>
                        <div className="w-100 mt-4">
                            <ShopBtn />
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
        </>
    )
}
Product.getInitialProps = async function (props) {
    global.item = '';
    global.err = null;
    await fetch('https://fakestoreapi.com/products/'+props.query.id)
    .then(res=>res.json())
    .then(json=>item=json)
    .catch(error => {
                global.Err = "err"
            })
    return { res: {item:global.item,err:global.Err} }
}