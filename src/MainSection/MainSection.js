import Overview from "../Overview/Overview";
import "../Styles/styles.css";
import arrow from "../assets/images/arrow.jpg";
import CellFrequency from "../CellFrequency/CellFrequency";
import Issues from "../Issues/Issues";
import FrequencyTrend from "../FrequencyTrend/FrequencyTrend";
import Communications from "../Communications/Communications";


function box(){
    document.getElementById("myModal").classList.toggle("mod1");
}

function MainSection (){

    
        return(
            <div className="main_section">
                 <span className="main2text">Illegal Transmissions Report &gt; [Site Name] &gt; [Cell Name]</span>
                    <div className="main1">
                        <div className="main2">
                            <img className="arrow" src={arrow} alt="notify" />

                            <h2 className="Cellname">[Cell Name]</h2>

                            <button className="Nodeissue">
                                Node Issue
                            </button>
                            </div>

                            <button  className="Createticket" onClick={()=>box()}>
                                 Create Ticket
                            </button>
                        
                            <div id="myModal" className="modal1">
                                <div className="modal-content">
                                    <span className="close"onClick={()=>box()}>&times;</span>
                                    
                                </div>
                            
                            </div>

                    </div>
                    <div className="sub">
                        <div className="sub-item1">
                            <Overview/>
                            <div className="sub_section" >
                                <CellFrequency/>
                                <Issues/>
                            </div>
                            <FrequencyTrend/>
                        </div>
                        <Communications/>
                    </div>    
            </div>
        );
    
}

export default MainSection;