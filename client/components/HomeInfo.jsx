import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

// import icon_calendar from '../../resources/images/icons/calendar.png';
// import icon_location from '../../resources/images/icons/location.png';

class HomeInfo extends Component {
    render() {
        return (
            <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={1500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            // background:`url(${icon_calendar})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                    Early Childhood Centers
                                    </div>
                                    <div className="vn_desc" style={{
                                        textAlign:"left",
                                        fontSize: "20px"
                                        
                                    }}>
                                    We provide a full list of Early Childhood Centers in New Zealand, so that you may search according to your needs
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>
                    
                    <Zoom duration={1500} delay={600}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            // background:`url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                    Services 
                                    </div>
                                    <div className="vn_desc"
                                    style={{
                                        textAlign:"left",
                                        fontSize: "20px"
                                        
                                    }}>
                                    Children matter. That’s why since 1972, we’ve been providing childcare that keeps babies, toddlers and preschoolers safe, loved, and learning. When you trust Kindercare with your child’s early care and education, we commit to a partnership with you that nurtures your child’s amazing potential, 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                      
                </div>
            </div>
        </div>
    );
};
}


export default HomeInfo;