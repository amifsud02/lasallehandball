import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { createRef, SyntheticEvent, useRef, useState } from "react";

import emailjs from '@emailjs/browser';

function ContactPage(){
   
    // Accordian
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        
        setExpanded(isExpanded ? panel : false);
    };

    // Email Forms
    const form = useRef<HTMLFormElement>(null);
    console.log(form);

    const sendEmail = (e: SyntheticEvent) => {
        e.preventDefault();
        
        // emailjs.sendForm('service_2760p4b', 'template_tq74y72', form.current, '8erocrf7ad_EDbX1a')
        //     .then((result: any) => {
        //         console.log(result.text);
        //     }, (error: any) => {
        //         console.log(error.text)
        //     });
    }

    return(
        <>
            <PageHeader pageName="Contact Us"/>
            <main>
                <section className="parent">
                    <div>                        
                        <Accordion square={true} style={{ boxShadow: '0px 1px 15px rgba(0,0,0,0.05)', fontFamily:'Raleway'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography style={{ fontWeight: 800, fontFamily: 'Raleway' }}>
                                    When are training sessions held?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography style={{ fontWeight: 500, fontFamily: 'Raleway',  fontSize: '15px' }}>
                                    
                                    • Training sessions are held on Tuesdays and Thursdays from 6:00pm to 8:00pm.<br/>
                                    • Men - Every Tuesday and Thurday @ 8:30 at University Sports Hall<br/>
                                    • U21 Men - Every Friday @ 5:30 at University Sports Hall
                                    
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion square={true} style={{ boxShadow: '0px 1px 15px rgba(0,0,0,0.05)'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography style={{ fontWeight: 800, fontFamily: 'Raleway' }}>
                                    When are training sessions held?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography style={{ fontWeight: 500, fontFamily: 'Raleway',  fontSize: '15px'}}>
                                    
                                        • Training sessions are held on Tuesdays and Thursdays from 6:00pm to 8:00pm. <br/>
                                        • Men - Every Tuesday and Thurday @ 8:30 at University Sports Hall.<br/>
                                        • U21 Men - Every Friday @ 5:30 at University Sports Hall
                                    
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion square={true} style={{ boxShadow: '0px 1px 15px rgba(0,0,0,0.05)'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography style={{ fontWeight: 800, fontFamily: 'Raleway' }}>
                                    When are training sessions held?
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography style={{ fontWeight: 500, fontFamily: 'Raleway',  fontSize: '15px'}}>
                                    
                                        • Training sessions are held on Tuesdays and Thursdays from 6:00pm to 8:00pm.<br/>
                                        • Men - Every Tuesday and Thurday @ 8:30 at University Sports Hall<br/>
                                        • U21 Men - Every Friday @ 5:30 at University Sports Hall
                                    
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div style={{ margin: '50px 0'}}>
                        
                        <div style={{ }}>Can&apos;t find the answer you&apos;re looking for? Then fill in the form below.</div>

                        <form className="form-group" ref={form} onSubmit={sendEmail}>
                            <div className="form-input one c-small">
                                <label>First Name</label>
                                <input type="text" id="fname" name="first_name" placeholder="Enter your first name"/>
                            </div>
                            
                            <div className="form-input two c-small">
                                <label>Last Name</label>
                                <input type="text" id="fname" name="last_name" placeholder="Enter your last name"/>
                            </div>
                            
                            <div className="form-input three c-small">
                                <label>Email</label>
                                <input type="text" id="fname" name="reply_to" 
                                    placeholder="Enter your email"/> 
                            </div>
                            
                            <div className="form-input four c-small">
                                <label>Phone Number</label>
                                <input type="text" id="fname" name="mobile_number"
                                    placeholder="Enter your phone number"/>
                            </div>

                            <div className="form-input five c-wide">
                                <label>Message</label>
                                <textarea 
                                    id="fname" 
                                    name="message"
                                    placeholder="Enter your message">
                                </textarea>
                            </div>

                            <div className="form-input six c-wide">
                                <input type="submit" value="Send" />
                            </div>


                        </form> 

                        <div>
                            <p>or Email Us on <a href="mailto:info:lasallehandball.com" style={{color: 'black'}}>info@lasallehandball.com</a></p>                           
                        </div>
                    </div>
               </section>
            </main>
            <Footer/>
        </>
        
    )
}

export default ContactPage;