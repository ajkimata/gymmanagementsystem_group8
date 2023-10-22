import React from 'react'
import './plan.css'

function Plan() {
  return (
    <div className='plans-page'>
        <div className='unlock-plans'>
            <p>Unlock the Full Potential of Your 
            <br/>
            Fitness with Our Membership Plans</p>
            <span>We offer a range of membership options designed to meet your needs and help you achieve your goals.</span>
        </div>

        <div className='payment-card-container'>
            <div className='basic-card'>
                <p> Basic membership</p>
                <p>Kshs.1000<span>/Month</span></p>
                <hr/>
                <p>Includes access to our gym facilities
                    <br/>
                    and group fitness classes
                </p>
                <button>Join Now</button>
            </div>
            <div className='premium-card'>
                <p> Premium membership</p>
                <p>Kshs.5000<span>/Month</span></p>
                <hr/>
                <p>Includes access to our gym facilities
                    <br/>
                    and group fitness classes
                </p>
                <button>Join Now</button>

            </div>
        </div>
    </div>
  )
}

export default Plan