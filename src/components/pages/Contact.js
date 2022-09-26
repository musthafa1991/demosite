import React from 'react'

function Contact() {
  return (
    <div>
       <section className="bg-primary text-center py-3">
                <h1>Contact Us</h1>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62189.30013784385!2d77.57006164366307!3d13.046410549365612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1784b9bb71f7%3A0xdbcffa0b85ffa6ae!2sSKSSF%20Hostel%20Hebbal%20(Darussalam)!5e0!3m2!1sen!2sin!4v1656214810027!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-md-6 col-lg-4  ">
                            <div className="card shadow">
                                <div className="card-body py-4">
                                    <h4>Contact</h4>
                                    <div className="mb-3"></div>
                                    <form>
                                        <label>Name</label>
                                        <input type="text" placeholder="Enter your name" className="form-control mb-3"></input>
                                        <label>Email</label>
                                        <input type="email" placeholder="Enter your email" className="form-control mb-3"></input>
                                        <label>Message</label>
                                        <textarea col="3" className="form-control mb-3"></textarea>
                                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Contact