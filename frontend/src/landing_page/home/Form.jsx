// import React,{useState} from "react";


// export default function Form() {

//     const [submit, setSubmit] = useState({ name :"",
//         age : 0,
//         gender:""});

   


//     let handleSubmit = (e) =>{
//         let data = e.target.value;
//         setSubmit(data);
//         console.log(data);

//     }

    



//     return(
//         <>
//         <div className="container">
//          <form onSubmit={handleSubmit} >
//          <label htmlFor="txtName">Name</label>
//          <input type="text" placeholder="Name"  id="txtName" onChange={setSubmit((e) => e.name.)} />

//          <label htmlFor="numAge">Age</label>
//          <input type="number" placeholder="Enter age"  id="numAge" onChange={}/>
//          <div>
//         <label htmlFor="radMale">Male</label>
//          <input type="radio" name="gender" id="radMale" value={"Male"} />

//         <label htmlFor="radFemale">Female</label>
//          <input type="radio" name="gender" id="radFemale"  value={"Female"} />

//         <label htmlFor="radNotSpecified">Not specified</label>
//          <input type="radio" name="gender" id="radNotSpecified" value={"not specified"}/>
//          </div>

//          <button>Submit</button>
        

//         </form>
//         </div>
        
//         </>
//     )
// }