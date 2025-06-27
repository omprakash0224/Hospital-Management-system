import React from 'react'

const Biography = ({ imageUrl }) => {
    return (
        <>
            <div className="container biography">
                <div className="banner">
                    <img src={imageUrl} alt="ZeeCare Healthcare" />
                </div>
                <div className="banner">
                    <p>About Us</p>
                    <h3>Welcome to ZeeCare Healthcare</h3>
                    <p>
                        At ZeeCare Healthcare, we are committed to providing compassionate,
                        high-quality medical care to individuals and families. Our
                        multidisciplinary team of doctors, nurses, and healthcare
                        professionals work around the clock to ensure you receive the best
                        treatment and care possible.
                    </p>
                    <p>Serving communities with care and integrity since 2024.</p>
                    <p>
                        ZeeCare Healthcare is currently enhancing patient experience through
                        innovative digital solutions built with the MERN stack,
                        revolutionizing hospital management and patient engagement.
                    </p>
                    <p>
                        Our mission is to make advanced healthcare accessible and
                        affordable, combining medical excellence with cutting-edge
                        technology to deliver seamless services.
                    </p>
                    <p>Your health, our priority — always.</p>
                    <p>Technology meets compassion at ZeeCare Healthcare.</p>
                </div>
            </div>
        </>
    )
}

export default Biography
