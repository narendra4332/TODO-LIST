import React from 'react'

export const Todo = ({ todo, onDelete }) => {
    return (
        <>
            <div className='py-2'>
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
                <button className="btn btn-sm btn-danger" style={{padding:"5px 15px",fontSize:"15px"}} onClick={() => { onDelete(todo) }}> Delete</button>
            </div >
            <hr />
        </>
    )
}
