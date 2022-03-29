import React from "react"
import twoChildren from '../assets/img/carousel-1.jpg'


function Home(){
    return(
       
<>
    <div className="carousel">
                <div className="container-fluid">
                    <div className="owl-carousel">
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src={twoChildren} alt="Image"/>
                            </div>
                            <div className="carousel-text">
                                <h1>Let's be kind for children</h1>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                                </p>
                                <div className="carousel-btn">
                                    <a className="btn btn-custom" href="">Donate Now</a>
                                    <a className="btn btn-custom btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">Watch Video</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src="img/carousel-2.jpg" alt="Image"/>
                            </div>
                            <div className="carousel-text">
                                <h1>Get Involved with helping hand</h1>
                                <p>
                                    Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis, orci sodales varius fermentum, tortor
                                </p>
                                <div className="carousel-btn">
                                    <a className="btn btn-custom" href="">Donate Now</a>
                                    <a className="btn btn-custom btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">Watch Video</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src="img/carousel-3.jpg" alt="Image"/>
                            </div>
                            <div className="carousel-text">
                                <h1>Bringing smiles to millions</h1>
                                <p>
                                    Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam. Proin pellentesque odio
                                </p>
                                <div className="carousel-btn">
                                    <a className="btn btn-custom" href="">Donate Now</a>
                                    <a className="btn btn-custom btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">Watch Video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    
            <div className="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img" data-parallax="scroll" data-image-src="img/about.jpg"></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-header">
                                <p>Learn About Us</p>
                                <h2>Worldwide non-profit charity organization</h2>
                            </div>
                            <div className="about-tab">
                                <ul className="nav nav-pills nav-justified">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="pill" href="#tab-content-1">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#tab-content-2">Mission</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#tab-content-3">Vision</a>
                                    </li>
                                </ul>
    
                                <div className="tab-content">
                                    <div id="tab-content-1" className="container tab-pane active">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae pellentesque turpis. Donec in hendrerit dui, vel blandit massa. Ut vestibulum suscipit cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum. Phasellus et felis sed purus tristique dignissim. Morbi sit amet leo at purus accumsan pellentesque. Vivamus fermentum nisi vel dapibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                    <div id="tab-content-2" className="container tab-pane fade">
                                        Sed tincidunt, magna ut vehicula volutpat, turpis diam condimentum justo, posuere congue turpis massa in mi. Proin ornare at massa at fermentum. Nunc aliquet sed nisi iaculis ornare. Nam semper tortor eget est egestas, eu sagittis nunc sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent bibendum sapien sed purus molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                    <div id="tab-content-3" className="container tab-pane fade">
                                        Aliquam dolor odio, mollis sed feugiat sit amet, feugiat ut sapien. Nunc eu dignissim lorem. Suspendisse at hendrerit enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed condimentum semper turpis vel facilisis. Nunc vel faucibus orci. Mauris ut mauris rhoncus, efficitur nisi at, venenatis quam. Praesent egestas pretium enim sit amet finibus. Curabitur at erat molestie, tincidunt lorem eget, consequat ligula.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    <div className="donate" data-parallax="scroll" data-image-src="img/donate.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="donate-content">
                                <div className="section-header">
                                    <p>Donate Now</p>
                                    <h2>Let's donate to needy people for better lives</h2>
                                </div>
                                <div className="donate-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non. Aliquam metus tortor, auctor id gravida, viverra quis sem. Curabitur non nisl nec nisi maximus. Aenean convallis porttitor. Aliquam interdum at lacus non blandit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="donate-form">
                                <form>
                                    <div className="control-group">
                                        <input type="text" className="form-control" placeholder="Name" required="required" />
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control" placeholder="Email" required="required" />
                                    </div>
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label className="btn btn-custom active">
                                            <input type="radio" name="options" checked/> $10
                                        </label>
                                        <label className="btn btn-custom">
                                            <input type="radio" name="options"/> $20
                                        </label>
                                        <label className="btn btn-custom">
                                            <input type="radio" name="options"/> $30
                                        </label>
                                    </div>
                                    <div>
                                        <button className="btn btn-custom" type="submit">Donate Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
    }
    export default Home;