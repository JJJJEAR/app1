import React from 'react'

export default function FormBootstrap() {

    return (
        <div className="mt-3 mx-auto p-3" style={{width:'400px',background:'#cee'}}>
        <form>
            <div className="form-group mb-3">
                <label htmlFor="login">Email</label>
                <input type="text" id="login" className="form-control"></input>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="pswd">Password</label>
                <input type="password" id="pswd" className="form-control"></input>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="login">Select</label>
                <select id="select1" className="form-select">
                    <option value="1">Item 1</option>
                    <option value="2">Item 2</option>
                    <option value="3">Item 3</option>
                </select>
            </div>
            <button className="btn btn-primary">OK</button>
        </form>
        </div>
    )
  
}
