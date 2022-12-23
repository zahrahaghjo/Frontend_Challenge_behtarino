import { Col,Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
import styles from '../styles/Product.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ProCard({item}){
    const[stars,setStars]=useState([])
    const calcuteRating=(rate)=>{
        let lengthOfArray=Math.round(Number(rate))
        setStars([...Array(lengthOfArray).keys()]) 
    }
    useEffect(() => {
        calcuteRating(item.rating.rate)
      },[item])
    return(
        <Col xl={3} lg={3} md={4} sm={6} className={"my-4 px-4"}>

            <a href={'/product/'+item.id} className="text-dark text-decoration-none">
                <div className="w-100 d-flex align-items-center justify-content-center">
                    <div className={styles.img} style={{background:"url("+item.image+")",width:100,height:100}} />
                </div>
                <Row className={"w-100 my-3 mx-0"}>
                    <Col className={styles.title}>{item.title.substring(0,35)}</Col>
                </Row>
                <Row className="w-100 mx-0">
                    <Col className="d-block">
                        {
                            stars.length>0 && stars.map((star,i)=>{
                                return(
                                        <FontAwesomeIcon key={i} icon={faStar} color={'#f47078'} size={'1x'} />
                                )
                            })
                        }
                    
                    </Col>
                    <Col className="d-flex justify-content-end">${item.price}</Col>
                </Row>
            </a>
        </Col>
    )
}
export default ProCard