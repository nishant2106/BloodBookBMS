import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="App" style={{ marginLeft: '0px' }}>
                <div id="inner-header">
                    <img style={{ width: '1093px', marginLeft: '0px', marginRight: '0px' }} src="http://nbtc.naco.gov.in/images/banner/whoareare.jpg" alt="" />
                </div>
                <section id="inner-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div class="inner-title-content">
                                    <h2>Donation Process</h2>
                                    <ul className="breadcrumb">
                                        <li> <a href="http://nbtc.naco.gov.in/">Home </a></li>
                                        <li><span style={{ color: '#CC0000' }}> &nbsp;&nbsp;&nbsp;&nbsp;Donation Process</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="service-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                <div className="col-md-12">
                                    <div id="collapseOne">
                                        <div className="panel-body">
                                            <ul id="tabs">
                                                <li className="active">Where can one donate blood?</li>
                                                <li className="">Post-Donation</li>
                                                <li className="">What happens to the Blood you donated?</li>
                                            </ul>
                                            <ul id="tab">
                                                <li className="active" style={{ border: '0px' }}>
                                                    <div className="col-md-4" align="center">
                                                        <img src="assets/logo.png" alt="donation-process" />
                                                        <h4 style={{ margin: '-5px', fontSize: '14px', fontWeight: 'bold' }}>Blood Banks</h4>
                                                    </div>

                                                    <div className="col-md-4" align="center">
                                                        <img src="http://nbtc.naco.gov.in/images/dp_campaign.png" alt="donation-process" />
                                                        <h4 style={{ margin: '-5px', fontSize: '14px', fontWeight: 'bold' }}>Blood DonationCamps</h4>
                                                    </div>

                                                    <div className="col-md-4" align="center">
                                                        <img src="http://nbtc.naco.gov.in/images/db_mobile.png" alt="donation-process" />
                                                        <h4 style={{ margin: '-5px', fontSize: '14px', fontWeight: 'bold' }}>Blood Mobiles</h4>
                                                    </div>

                                                    <p style={{ paddingTop: '15px', clear: 'both', paddingBottom: '25px' }}>
                                                        A person can donate blood either in a licensed blood bank, blood donation camps or at a blood mobile.
                                                        </p>

                                                    <h4> Blood Banks</h4>
                                                    <div style={{ margin: '10px 10px', lineHeight: '30px', color: '#333' }}>
                                                        <i className="fa fa-circle" style={{ fontSize: '8px', paddingRight: '10px' }}></i>
                                                                Any person can walk-in voluntarily any time round the clock at their own convenience to donate blood in a licensed blood bank. <br />
                                                        <i className="fa fa-circle" style={{ fontSize: '8px', paddingRight: '10px' }}></i>
                                                                Beside, an In-house camp can be organized in a blood bank on pre-fixed dates with the Organisers and Blood Bank in charge.
                                                        </div>

                                                    <h4>Outdoor camps</h4>
                                                    <div style={{ margin: '10px 10px', lineHeight: '30px', color: '#333' }}>
                                                        Prefixed venues by Organisers like educational institutions, industrial and commercial houses etc. Blood Banks organize camps in these sites/ premises on a fixed day as decided by SBTC.
                                                        </div>

                                                    <h4>What to expect when you visit a Blood Bank or Blood Donation Camp </h4>
                                                    <div className="gap-20"></div>
                                                    <div className="col-md-3">
                                                        <img src="http://nbtc.naco.gov.in/images/p1.png" align="donation-process" style={{ marginTop: '12px' }} />
                                                    </div>

                                                    <div className="col-md-8">
                                                        <h3 className="donation-title"> Registration <span style={{ color: '#666' }}>(10 Mins)</span> </h3>
                                                        <p>Donor fills up the registration form and gives his consent for donation. </p>
                                                    </div>
                                                    <div className="gap-20"></div>

                                                    <div style={{ width: '100%' }}>
                                                        <div className="col-md-8">
                                                            <h3 className="donation-title"> Medical Check up <span style={{ color: '#666' }}>(5 Mins)</span> </h3>
                                                            <p>Donors Medical History &amp; life style is asked, check up of temperature, blood pressure, pulse and haemoglobin.</p>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <img src="http://nbtc.naco.gov.in/images/p2.png" align="donation-process" style={{ marginTop: '5px' }} />
                                                        </div>
                                                    </div>

                                                    <div className="gap-20"></div>

                                                    <div style={{ width: '100%' }}>
                                                        <div className="col-md-3">
                                                            <img src="http://nbtc.naco.gov.in/images/p3.png" align="donation-process" style={{ marginTop: '12px' }} />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h3 className="donation-title"> Donation <span style={{ color: '#666' }}>(8 Mins)</span></h3>
                                                            <p>Phlebotomist draws unit (350ml/450ml) of blood. A new sterile meedle is used to draw each unit and the needle is destroyed after it has been used. It taked less than 10 min.</p>
                                                        </div>
                                                    </div>

                                                    <div className="gap-20"></div>
                                                    <div style={{ width: '100%' }}>
                                                        <div className="col-md-8">
                                                            <h3 className="donation-title"> Refreshment <span style={{ color: '#666' }}>(10 Mins)</span></h3>
                                                            <p>Enjoy Snacks and drinks juice to replenish fluids. </p>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <img src="http://nbtc.naco.gov.in/images/p6.png" align="donation-process" style={{ marginTop: '12px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="gap-20"></div>
                                                </li>

                                                <li style={{ border: '0' }} className="">
                                                    <div className="col-md-4" align="center">
                                                        <img src="http://nbtc.naco.gov.in/images/dp1.png" style={{ marginBottom: '10px' }} />
                                                        <p>Drink plenty of fluids like water, soup and fruit juices to replace the volume lost during donation. </p>
                                                    </div>

                                                    <div className="col-md-4" align="center">
                                                        <img src="http://nbtc.naco.gov.in/images/dp2.png" style={{ marginBottom: '10px' }} />
                                                        <p>Avoid lifting heavy weights with the donation arm or engaging in strenuous physical activities to prevent complications.</p>
                                                    </div>

                                                    <div className="col-md-4" align="center">
                                                        <img src="http://nbtc.naco.gov.in/images/dp3.png" style={{ marginBottom: '10px' }} />
                                                        <p>If you feel dizzy, unwell or have cold sweats, follow the steps listed below.</p>
                                                    </div>

                                                    <div style={{ margin: '20px 20px', lineHeight: '30px', color: '#333', clear: 'both' }}>

                                                        <i className="fa fa-circle" style={{ fontSize: '8px', paddingRight: '10px' }}></i> Take a seat or Iie down immediately, preferably with your feet raised, until the feeling passes. Loosen any restrictive garments and keep breathing smoothly.<br />
                                                        <i className="fa fa-circle" style={{ fontSize: '8px', paddingRight: '10px' }}></i>  Keep calm and take slow and long deep breaths.<br />
                                                        <i className="fa fa-circle" style={{ fontSize: '8px', paddingRight: '10px' }}></i>  Seek assistance from any passer-by or people near you.<br />
                                                        <i className="fa fa-circle" style={{ fontSize: '8px', paddingRight: '10px' }}></i>  If the condition does not improve or for any reason something doesn't feel right, call the Blood Bank.
                                                        </div>

                                                    <p>In uncommon situations where fresh bleeding occurs after the plaster is removed, put gentle pressure on the venepuncture site, raise your arm for 3-5 minutes and apply a bandage to the site.</p>
                                                    <p>The bandage or the dressing can be removed after 6 hours. If you notice bruising around the venepuncture site, it is usually caused by bleeding into the tissue underneath the skin.</p>
                                                    <p>It will usually resolve in a week's time. If you feel pain or discomfort, applying a cold compress to the area may help.
                                                            If the venepuncture site becomes swollen or blue or you experience pain or numbness in the arm, call the blood bank.</p>
                                                </li>
                                                <li style={{ border: '0' }} className="">
                                                    <h4>Screening </h4>
                                                    <p>Blood safety means ensuring that it is safe for the donor to donate blood given current health status as well as that donated blood carries minimal risk of adverse effects for the recipient in terms of matching blood groups and is free of Transfusion Transmissible Infections (TTIs).
                                TTIs are infections which occur in a recipient of a blood transfusion if the transfused blood contains a pathogen. Many organisms like bacteria, viruses and parasites can be transmitted through blood transfusions.</p>
                                                    <p>The Drugs and Cosmetics Act of India mandates that all blood units that are collected in blood banks for the purpose of transfusion should be screened for the following organisms:</p>
                                                    <p><i className="fa fa-circle" style={{ fontSize: '8px', paddingRight: '10px' }}></i> Human Immunodeficiency Virus (HIV) </p>
                                                    <p><i className="fa fa-circle" style={{ fontSize: '8px', paddingRight: '10px' }}></i> Hepatitis B and Hepatitis C Virus</p>
                                                    <p><i className="fa fa-circle" style={{ fontSize: '8px', paddingRight: '10px' }}></i> Treponema Pallidum (which causes Syphilis)</p>
                                                    <p><i className="fa fa-circle" style={{ fontSize: '8px', paddingRight: '10px' }}></i> Plasmodium species (which causes Malaria)</p>
                                                    <p>Blood which is detected as having any of these infections is destroyed to prevent infecting others.</p>
                                                    <h4 style={{ marginTop: '15px' }}>Separation</h4>
                                                    <div align="center">
                                                        <img src="http://nbtc.naco.gov.in/images/seperation.png" alt="nbtc -  blood seperation" />
                                                    </div>
                                                    <p>Blood is often separated into its individual components, so patients can be given what they need, for example red blood cells or platelets.</p>
                                                    <p><strong>Red Blood Cells (RBCs)</strong> contain haemoglobin, which distributes oxygen to body tissues, and carries waste carbon dioxide back to the lungs. RBCs are transfused in case of trauma cases, surgery or to treat severe anemia.</p>
                                                    <p><strong>Platelets</strong> are crucial in helping blood to clot: they do this by clumping together to stop bleeding after an injury. </p>
                                                    <p><strong>Plasma</strong> is the fluid that carries all blood cells and components. Plasma contains a large number of proteins and substances which are often important ingredients in medical procedures. Plasma is transfused to patients to treat shock due to plasma loss from burns or massive bleeding.</p>
                                                    <p><strong>Plasma includes:</strong></p>
                                                    <p>
                                                        <em>Albumin</em> - a protein useful for treating kidney and liver disease <br />
                                                        <em>Clotting factors </em>- used to treat types of haemophilia and diseases where blood doesn't clot properly <br />
                                                        <em>Immunoglobins</em> - these antibodies help protect against infections
                                                        </p>
                                                    <h4 style={{ marginTop: '15px' }}>Storage</h4>
                                                    <div align="center">
                                                        <img src="http://nbtc.naco.gov.in/images/storage.png" alt="nbtc -  blood seperation" />
                                                    </div>
                                                    <p><strong>Issuing of Blood components</strong></p>
                                                    <p>On request generated by authorized medical personnel your blood components will be issued to a recipient subject to blood group compatibility and blood bank inventory protocols.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default About;