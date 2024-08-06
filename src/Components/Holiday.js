import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMagnifyingGlass, faEnvelope, faPhone, faHeart, faBell, faImage } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn, faTwitter, faTelegram, faFacebookF, faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import brandimage from '../images/brand.png'
import caroselimage from '../images/carosel.png'
import './Hotel.css';
import { data } from './a.js';
import { cards } from './a.js';

const Holiday = () => {
    return (
        <div className='holiday'>
            <nav class="navbar navbar-expand-lg">
                <div class="container ">
                    <img src={brandimage} width='60px' />
                    <div className='searchbaricon mx-2'>
                        <input type='text' placeholder='Search' className='px-3 py-2' />
                    </div>
                    <div className='searchbariconbtn' >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto" >
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faHeart} style={{ fontSize: '22px' }} /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><FontAwesomeIcon icon={faBell} shake style={{ fontSize: '25px' }} /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <img src={brandimage} style={{ borderRadius: '50%', width: '30px' }} />
                                </a>
                            </li>
                            <li class="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
                                <a class="nav-link">
                                    <div>
                                        <h6 className='text-bold'> My Account</h6>
                                    </div>
                                    <div>
                                        <h6>Edit</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='main_2'>
                <div className='container'>
                    <div className='row'>
                        <div className='alldetailsbtns'>
                            <div className='allbtns'>
                                <button className='btn btn-outline-dark px-5'> Flight's </button>
                            </div>
                            <div className='allbtns'>
                                <button className='btn btn-outline-dark px-5 active'> Hotel's </button>
                            </div>
                            <div className='allbtns'>
                                <button className='btn btn-outline-dark px-5'> Holiday Package's </button>
                            </div>
                            <div className='allbtns'>
                                <button className='btn btn-outline-dark px-5'> Train's </button>
                            </div>
                            <div className='allbtns'>
                                <button className='btn btn-outline-dark px-5'> Buses </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main_3 py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='container main_main'>
                            <h5> Were Is Your Next Dream Plcae? </h5>
                            <p> Find Exclusive Genius Rewards in Every Corner Of The Ward! </p>
                        </div>
                        <div className='alldetailsbtns'>
                            <div className='allbtns'>
                                <div className='dreamplaces'>
                                    <div>
                                        <p className='fw-bold dreamplaces_para'> Place </p>
                                    </div>
                                    <input type='text' className='input' placeholder='Guetenberg...' />
                                </div>
                            </div>
                            <div className='allbtns'>
                                <div className='dreamplaces'>
                                    <div>
                                        <p className='fw-bold dreamplaces_para'> VIP </p>
                                    </div>
                                    <select style={{ width: '300px', padding: '6px 0px' }}>
                                        <option> Normal </option>
                                        <option> Average</option>
                                        <option> Hiend </option>
                                    </select>
                                </div>
                            </div>
                            <div className='allbtns'>
                                <div className='dreamplaces'>
                                    <div>
                                        <p className='fw-bold dreamplaces_para'> Passenger-Room Condition </p>
                                    </div>
                                    <select className='input' style={{ width: '300px', padding: '6px 0px' }} placeholder='Aduits - 3 Children'>
                                        <option>  Adult 1 child </option>
                                        <option>  Adult 2 child </option>
                                        <option> Adult 3 childs  </option>
                                    </select>
                                </div>
                            </div>
                            <div className='allbtns'>
                                <div className='dreamplaces'>
                                    <div>
                                        <p className='fw-bold dreamplaces_para'> Check In - Check Out </p>
                                    </div>
                                    <input type='text' className='input' placeholder='27 Jully 2024 - 07 August 2024' />
                                    <button className='searchbtn_search px-4 fw-bold'> Search </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main '>
                <div className='container-fluid'>
                    <div className='row'>
                        <img src={caroselimage} />
                    </div>
                </div>
            </div>

            <div className='main2 mt-4'>
                <div className='container'>
                    <div className='specialheading'>
                        <h2 className='specialheading_head'>Special Holidays</h2>
                    </div>
                    <div className='row'>
                        {
                            data.map((val, i) => {
                                return (
                                    <div key={i} className='card col-md-4 my-2 border-0'>
                                        <div className='card_image' style={{ position: 'relative', padding: '20px', }}>
                                            <img src={val.image} width='100%' height='250px' style={{ borderRadius: '10px' }} />
                                        </div>
                                        <div className='card_body' style={{ position: 'absolute', top: '75%', left: '12%', color: 'white', }}>
                                            <button className='card_btn' style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '6px 13px', borderRadius: '10px' }}>{val.title} <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffff", }} /> </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='main3'>
                <div className='container'>
                    <h2 className='main3_head mb-4'> Explore In And Out </h2>
                    <div className='row'>
                        <img src='https://t3.ftcdn.net/jpg/00/98/76/16/360_F_98761648_uLogNnSlCfVS0RmsVlXf7DLau3mS0vGk.jpg' width='100%' />
                    </div>
                </div>
            </div>

            <div className='main4 mb-5'>
                <div className='container-fluid'>
                    <div className='main-image'>
                        <div className='container'>
                            <div className='row main_style' >
                                {cards.map((val, i) => {
                                    return (
                                        <div key={i} className='col-md-4' style={{ width: '22rem' }}>
                                            <div class="card col-md-4">
                                                <div className='d-flex justify-content-center pb-5'>
                                                    <img class="card-img-top card_image" src={val.image} alt="Card image cap" />
                                                </div>

                                                <div class="card-body">
                                                    <div>
                                                        <h5 class="card-title">{val.title}</h5>
                                                    </div>
                                                    <div>
                                                        <p class="card-text">{val.body}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='container'>
                <div className='row'>
                    <div className='firstfooter'>
                        <div>
                            <img src={brandimage} width='100px' />
                        </div>
                        <div className='mt-4'>
                            <h5>Quick Link's </h5>
                            <p>Flight's</p>
                            <p>Buses</p>
                            <p>Train's</p>
                            <p>Package's</p>
                            <p>Login/SinUp</p>
                        </div>
                        <div className='mt-4'>
                            <h5> We offer </h5>
                            <p> Booking Flights </p>
                            <p> Booking Hotel's </p>
                            <p> Booking Train's </p>
                            <p> Booking Busses </p>
                        </div>
                        <div className='mt-4'>
                            <h5> Activities </h5>
                            <p> Tour Leading </p>
                            <p> Cruising & Sailing  </p>
                            <p> Camping </p>
                            <p> Kayaking </p>
                        </div>
                        <div className='mt-4'>
                            <h5> Service </h5>
                            <p> Privacy & Security </p>
                            <p> Term's & Condition's </p>
                            <p> Traveling Insurance </p>
                        </div>

                    </div>

                </div>
            </div>



            <div className='container mb-5'>
                <div className='row'>
                    <div className='secondfooter'>
                        <div className='mt-4'>
                            <div className='d-flex icons_icons'>
                                <div>
                                    <FontAwesomeIcon icon={faCcVisa} className='iconsfooter' />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCreditCard} className='iconsfooter' />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCcMastercard} className='iconsfooter' />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCcPaypal} className='iconsfooter' />
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='d-flex icons_icons'>
                                <div>
                                    <FontAwesomeIcon icon={faLinkedinIn} className='iconsfooter' />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faTelegram} className='iconsfooter' />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faTwitter} className='iconsfooter' />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faFacebookF} className='iconsfooter' />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faInstagram} className='iconsfooter' style={{ fontSize: '' }} />
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>

                            <h6> Email </h6>
                            <div className='d-flex'>
                                <div>
                                    <form>
                                        <input type='text' placeholder='Enter Your Email...' className='footer-form' />
                                        <button style={{ backgroundColor: 'navy', color: 'white', fontWeight: 'bold', border: 'none', padding: '10px 16px' }}> Subscribe </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main6'>
                <div className='container-fluid thirdfootercolor' style={{ backgroundColor: '#a6bcca' }}>
                    <div className='container'>
                        <div className='thirdfooter'>
                            <div className='copyemailnumber'>
                                <h6>&copy; Copy Right prashnath Travels Agency </h6>
                            </div>
                            <div >
                                <h6><FontAwesomeIcon icon={faEnvelope} /> prashnath554554@gmail.com </h6>
                            </div>
                            <div className='copyemailnumber'>
                                <h6><FontAwesomeIcon icon={faPhone} /> +91 8106124493 </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Holiday
