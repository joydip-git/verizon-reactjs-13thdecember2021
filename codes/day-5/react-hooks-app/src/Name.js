import React, { useEffect } from 'react'

const Name = (props) => {

    useEffect(
        () => {
            console.log('name updated')
        },
        [props.nameData]
    )
    useEffect(
        () => {
            console.log('name mounted')
        },
        []
    )
    useEffect(
        () => {
            console.log('always')
        }
    )
    console.log('name rendered')
    return (
        <div>
            Name:&nbsp;<input type='text' value={props.nameData} onChange={(e) => props.nameHandler(e.target.value)} />
        </div>
    )
}

export default Name
