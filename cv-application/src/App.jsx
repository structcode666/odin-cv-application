import { useState } from 'react'
import { FormElement } from './components/formElement'
import { CvRender } from './components/cvRender'
import { Fragment } from 'react'

function App() {

  const [heading, setHeading] = useState({"Name" :"", "Email" :"", "Phone Number" :"" })
  const [qualifications, setQualifications] = useState({"Education": "", "University":"", "Year Graduated": "",})
  const [workExperience, setWorkExperience] = useState([{id: crypto.randomUUID() , "Employer":"", "Role":"" , "Start Date" :"" , "End Date" :"", Responsibilities: ""}])
  const [isSubmitted, setSubmitted] = useState(false)

  let changedHeadingInput = (event)=>{

    let newInput = {};

    let formInputType = event.target.name;
    let formInputValue = event.target.value;

    newInput = {
      [formInputType] : formInputValue
    }

    setHeading({
      ...heading,
      ...newInput
    })



  }

  let changedQualificationsInput = (event)=>{

    let newInput = {};

    let formInputType = event.target.name;
    let formInputValue = event.target.value;

    newInput = {
      [formInputType] : formInputValue
    }

    setQualifications({
      ...qualifications,
      ...newInput
    })

    console.log(heading, qualifications)

  }


  function updateJobs(event, jobId) {

    return workExperience.map(job => {

      if(job.id == jobId){

        let newInput = {};

        //reads the user interaction with a specific work experience line//
        let formInputType = event.target.name;
        let formInputValue = event.target.value;

        newInput = {
          [formInputType] : formInputValue
        }

        return {...job , ...newInput}
        
      }

      return job
      
    },
   console.log(workExperience)
   )
    
  }

  let changedWorkExperienceInput = (event, jobId)=>{

    setWorkExperience(updateJobs(event, jobId))

  }

  let addWorkExperience= () => {

    let newJob= {id: crypto.randomUUID() , "Employer":"", "Role":"" , "Start Date" :"" , "End Date" :"", Responsibilities : "" }

    

    setWorkExperience([...workExperience, newJob])
  }

  let editForm = ()=> {

    isSubmitted == false ? setSubmitted(true): setSubmitted(false);

  }

  function deleteWorkExperience(jobId){

    setWorkExperience(workExperience.filter( (job) => jobId != job.id))
    
    
}

function submitForm(event){
  event.preventDefault();
  setSubmitted(true)
}
  

  

  return (
  <>

  {!isSubmitted && <form className = "formPanel" onSubmit={submitForm}>
      <> <FormElement formTitle= "Heading" changedInput={changedHeadingInput} values = {heading}/> </>
      <> <FormElement formTitle= "Qualifications" changedInput={changedQualificationsInput} values = {qualifications}/> </>
      <>{workExperience.map((job)=>(
        <FormElement formTitle= "Work Experience" key = {job.id} changedInput={(event)=>changedWorkExperienceInput(event, job.id)} values = {job} deleteWorkExperience={()=>deleteWorkExperience(job.id)}/>
      ))}</>

      <button type = "button" onClick = {addWorkExperience} className = "add-work-experience"> Add More Work Experience </button>

      <button className='submit-form' type = "submit">Submit</button>
    </ form>} 
    
    <div className="resumePanel">
      <><CvRender formObject={heading}/></>
      <><CvRender formObject={qualifications}/></>
      <Fragment>
      {workExperience.map((job)=>{
        return <div className="work-experience" key = {job.id}>   <CvRender  formObject = {job}/>       </div>
      })}
      </Fragment>
      {isSubmitted && <button className='edit-form' onClick={editForm}>Edit</button>}
      

    </div>
    
  </>



 
  )
}

export default App
