import React, { Component } from 'react'
import Notifications from './Notifications'

export class Dashboard extends Component {
    render() {
        return (
            <div className="container w-100 pt-5">
                <div className="row">
                    <div className="col-lg-10">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic quaerat obcaecati debitis unde ipsum qui explicabo vitae corrupti ab, repellendus iure quidem eligendi sapiente illo, eius ad velit. Veritatis?
                    </div>
                    <div className="col-lg-2">
                        <Notifications/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ad, facilis expedita, nemo adipisci accusantium earum eos sapiente fugiat aliquid voluptatem incidunt nesciunt! Quos maiores itaque ipsam dolore corporis nam?
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
