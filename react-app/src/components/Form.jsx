import React from 'react'

export default function Form() {
    return (
        <div style={{
            position: 'absolute',
            bottom: '100px',
            right: '50px',
            width: '400px',
            backgroundColor: 'white',
            border: 'solid 1px black',
            padding: '10%',
        }}>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>
    )
}