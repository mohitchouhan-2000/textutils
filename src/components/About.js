import React,{ useState } from 'react'


export default function About(props) {
    // const [enable, setEnable] = useState('Dark Mode');
    // const [myStyle, setMyStyle] = useState({
    //    color: 'black',
    //    backgroundColor: 'white'
    // });
    
    // let handleStyle = () => {
    //   if(myStyle.color === 'white'){
    //       setMyStyle({
    //           color: 'black',
    //           backgroundColor: 'white'
    //       });
    //     setEnable('Dark Mode');  
    //   }
    //   else{
    //       setMyStyle({
    //           color: 'white',
    //           backgroundColor: 'black',
    //           border: '1px solid white'
    //       });
    //     setEnable('Light Mode');
    //   }
    
    // }
     
    let myStyle = {
        color: props.mode === 'dark'? 'white': '#52677a',
        backgroundColor: props.mode === 'dark'? '#52677a': 'white',
        border: "1px solid",
        borderColor: props.mode === 'dark' ? 'white' : '#52677a'
    }

    return (
        <>
           
            <div className='container my-4' style={{color: props.mode === 'dark'? 'white': '#52677a'}}>
                <h3 className='my-3'>About us</h3>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>What is NginX?</strong> 
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            NGINX is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. It started out as a web server designed for maximum performance and stability.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>What is firebase?</strong> 
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>What is AWS?</strong> 
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            AWS provides servers, storage, networking, remote computing, email, mobile development, and security. AWS accounts for about 13% of Amazon's total revenue as of Q2 2021.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
