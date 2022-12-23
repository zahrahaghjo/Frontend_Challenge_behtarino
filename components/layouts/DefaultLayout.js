import React  from "react";
import CanvasMenu from '../CanvasMenu';


function DefaultLayout(props){

    return(
        <>
            <CanvasMenu />
            {props.children}
        </>
      
    )
}


export default DefaultLayout ;

