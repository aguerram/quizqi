import React, {useEffect} from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment
} from 'semantic-ui-react'
import {useRecoilState, useRecoilValue} from "recoil/dist";
import {testTime} from "../atoms/testTime";
import {Redirect} from "react-router";


const WinPage = () => {
    const testTimeValue = useRecoilValue(testTime)
    useEffect(()=>{

    },[testTimeValue])

    if(testTimeValue === 0)
    {
        return <Redirect to={"/start"}/>
    }

    return <Container>
        <div style={{height:200}} className="row">
            <div className="col-6">

            </div>
            <div className="col-6">
                <div className="row">
                    Bravo, vous avez réussi
                    votre test de QI en { parseFloat(testTimeValue/1000).toFixed(2) }s
                </div>
                <div className="row">
                    <Button>Obtenir le certificat</Button>
                </div>
            </div>
        </div>
    </Container>
}


export default WinPage