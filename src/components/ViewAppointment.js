import React ,{useState,useEffect} from 'react';
import Header from './Header';
import "./App.css";
import Footer from './Footer';
import { getappointment } from '../api/appoint';
import { prescriptiondetail,medicationdetail } from '../api/pres';
import Cookies from 'js-cookie';




const ViewAppointment = () =>{
    const [appointment, setAppointment] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const appoint = await getappointment();
                setAppointment(appoint.data)

                  
                }
                catch (err) {
                    console.log(err)
    
                }
            } 

        fetchData();
        
    }, []);

  
    return (
        
        <div>
            <Header />
            <div className="container-fluid" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://img.freepik.com/free-photo/stethoscope-with-business-card_23-2147652316.jpg?size=626&ext=jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
      }}> 
            <div className=" text-center p-4">
            <h1>Your Appointment</h1>
            </div>
            
            <div className="row " style={{ borderRadius:'10px 10px 10px 10px'}}>
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light" style={{ borderRadius:'10px 10px 10px 10px'}}>
                        <div className="card-body bg-light">
                            <div className="container">
                                    <div className="controls">
                                        <div className="row">
                                    
                                            <div className="col-md-12 text-center">
                                            <h4><b>Appointments</b></h4>
                                            </div>
                                        </div><br />
                                        {(appointment) ?  appointment.map(appoint => <div className="row">
                                            <center>
                                            <div>
                                                {appoint.firstname} {appoint.lastname} - {appoint.time} {(appoint.existing) ? "Existing Patient" : ""} 
                                            </div>
                                            </center>
                                            
                                        </div>) : ""}
                                       
                                        
                
                                        
                                    </div>
                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
            <div className="row" style={{height:"25px"}}>
             </div>       


            </div>
            <Footer/>
        </div>

    )
}

export default ViewAppointment;

