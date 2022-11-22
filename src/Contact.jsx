import React, { useState } from 'react'

const Contact = () => {

    const [details, setdetails] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: ""
    })

    const handlesubmit = (e) => {
        e.preventDefault();

        alert(`My name is ${details.fullname} and my email is ${details.email} .${details.phone} is my phone number.
        `)

        setdetails(
            {
                fullname: "",
                email: "",
                phone: "",
                message: ""
            }
        )
    }

    const inputevent = (e) => {

        const { name, value } = e.target;

        setdetails((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <>
            <div className="text-center">Contact Us</div>
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handlesubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text"
                                    onChange={inputevent}
                                    name="fullname"
                                    class="form-control"
                                    value={details.fullname}
                                    id="exampleFormControlInput1"
                                    placeholder="Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email"
                                    onChange={inputevent}
                                    name="email"
                                    value={details.email}
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="number"
                                    onChange={inputevent}
                                    name='phone'
                                    value={details.phone}
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="mobile number" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control"
                                    onChange={inputevent}
                                    name="message"
                                    value={details.message}
                                    id="exampleFormControlTextarea1"
                                    placeholder='message'
                                    rows="3"></textarea>
                            </div>
                            <button class="btn btn-primary" type="submit">Submit form</button>
                        </form>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Contact