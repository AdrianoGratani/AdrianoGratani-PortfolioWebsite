'use client'
import { DataArray } from "@/app/data"
import React from 'react'
import PortfolioDetailDesign from "../../page/portfolio-detail-design"

import {useEffect} from 'react';
const Portfolio = (props)=> {
    // console.log(props.params.id)

    useEffect(()=> {
        document.title = "Projects | Adriano Gratani"
    },[])
    return(
        <React.Fragment>
            <PortfolioDetailDesign   
            data={DataArray[props.params.id]}
            id={props.params.id}
            DataArray={DataArray}
            />
        </React.Fragment>
    )
}

export default Portfolio