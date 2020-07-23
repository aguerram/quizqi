import React from "react"
import {Button} from "semantic-ui-react";
import {useHistory} from "react-router";

const HomePage = (props)=>{
    const history = useHistory()
    return <div className="row p-4 justify-content-center">
        <Button onClick={()=>{
            history.push("/start")
        }} size={"big"}>Commencer le test</Button>
    </div>
}
export default HomePage