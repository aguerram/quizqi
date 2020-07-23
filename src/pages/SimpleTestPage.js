import React, {useEffect, useState} from "react"
import {useHistory, useParams, useLocation, Redirect } from "react-router-dom";
import {Button, Loader, Modal} from "semantic-ui-react";
import {useRecoilState} from "recoil/dist";
import {answersAtom} from "../atoms/answersAtom";
import {testTime} from "../atoms/testTime";

const QI = [
    {
        question: "1+1=?",
        answers: [
            {
                key: "a",
                value: "5"
            },
            {
                key: "b",
                value: "1"
            },
            {
                key: "c",
                value: "2"
            },
            {
                key: "d",
                value: "3"
            }
        ],
        correct: "c"
    },
    {
        question: "1+?=9",
        answers: [
            {
                key: "a",
                value: "5"
            },
            {
                key: "b",
                value: "6"
            },
            {
                key: "c",
                value: "7"
            },
            {
                key: "d",
                value: "8"
            }
        ],
        correct: "d"
    }
]

const SimpleTestPage = (props) => {
    const location = useLocation()
    const {id} = useParams()

    useEffect(() => {
        console.log(location)

    }, [location])

    if(id)
    {
        return <TestPage/>
    }
    else{
        return <StartTest/>
    }

}
const StartTest = (props) => {
    const history = useHistory()
    const [, setTestTime] = useRecoilState(testTime)
    return <div className="row justify-content-center">
        <Button onClick={() => {
            history.push("/start/1")
            setTestTime(Date.now())
        }} primary={true}>Start the test</Button>
    </div>
}
const TestPage = (props) => {
    const {id} = useParams()
    const history = useHistory()
    const [, setTestTime] = useRecoilState(testTime)

    const [finish, setFinish] = useState(false)
    const [qst, setQst] = useState(null)
    const [selected, setSelected] = useState(null)
    const [answers, setAnswers] = useRecoilState(answersAtom)
    useEffect(() => {
        if (Number(id) > QI.length)
            setFinish(true)
        else {
            setFinish(false)
            setSelected(null)
            let _id = Number(id)
            if (_id < 1)
                _id = 1
            setQst(QI[_id - 1])
        }
        if (Number(id) === 0) {
            setAnswers([])
        }
    }, [id])

    const chooseQuestion = (key) => {
        setSelected(key)
    }
    const nextQuestion = () => {
        let _id = Number(id) - 1
        setAnswers((old) => [
            ...old,
            {
                id: Number(id) - 1,
                correct: selected === QI[_id].correct
            }
        ])
        history.push(`/start/${Number(id) + 1}`)
    }
    const getResults = () => {
        setTestTime((old) => Date.now() - old)
        history.push("/finish")
    }
    if (finish) {
        return <div className="row justify-content-center">
            <Button onClick={getResults} primary={true}>Get my results</Button>
        </div>
    }
    if (!qst)
        return <Loader/>
    return <div className="row">
        <div className="container">
            <h1 className={"p-4"} style={{
                border: "1px solid black"
            }} align={"center"}>{qst.question}</h1>
            <hr/>
            <div className="row">
                {
                    qst.answers.map(e => (
                        <div key={e.key} className="col-6 p-2">
                            <Button primary={e.key === selected} onClick={() => {
                                chooseQuestion(e.key)
                            }} fluid={true}>{e.value}</Button>
                        </div>
                    ))
                }
            </div>
            <hr/>
            <div className="row justify-content-end">
                <Button onClick={nextQuestion} color={"instagram"}>Suivant</Button>
            </div>
        </div>
    </div>
}
export default SimpleTestPage