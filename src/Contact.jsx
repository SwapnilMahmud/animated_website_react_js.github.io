import React,{useState} from 'react'

const Contact = () => {
    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent=(event)=>{
        const{name, value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        });
    }
    const formSubmit=(e)=>{
       e.preventDefault();
    };
    return (
        <>
         <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
         </div>
         <div className="continer contact_div">
             <div className="row">
                 <div className="col-md-6 col-10 mx-auto">
                     <form onSubmit={formSubmit}>
                         <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input name="fullname" value={data.fullname} onClick={InputEvent} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"/>
                            </div>
                             <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                            <input name="phone" value={data.phone } onClick={InputEvent} type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile No"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input name="email" value={data.email } onClick={InputEvent} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea name="message" value={data.msg } onClick={InputEvent} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div >
                            
                            <div class="col-12">
                               <button class="btn btn-outline-primary" type="submit">
                                   Submit form
                               </button>
                            </div>
                     </form>

                 </div>

             </div>

         </div>
        </>
    )
}

export default Contact
