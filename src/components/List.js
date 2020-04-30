import React from 'react'

function List(props) {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.created}</td>
                <td>{props.orders}</td>
            </tr>
         </>
    )
}

export default List
