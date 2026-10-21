import { Fragment } from "react";

const forms = [

    {formTitle : "Heading", formInputs : ["Name", "Email", "Phone Number"]},
    {formTitle : "Qualifications", formInputs : ["Education", "University", "Year Graduated"]},
    {formTitle : "Work Experience", formInputs : ["Employer", "Role", "Start Date", "End Date", "Responsibilities"]},

]

function isWorkExperience(formType){

    if(formType == "Work Experience") return true;
}

export function FormElement({ formTitle, changedInput, values, deleteWorkExperience}) {

    //returns shallow copy of forms matching the type of form that is being used in the component//
    let formType = forms.filter(form => (form.formTitle == formTitle))    



    return (
        <>
        
        <div className={formTitle}>
            <h1 className = "form-title"> {formTitle} </h1>
            <div className="form-fields">

                {(formType[0].formInputs).map((formInput)=>{
                    return <Fragment key = {formInput}>
                            <label htmlFor={values.id ? values.id + "-" + formInput : formInput}>{formInput} : </label>
                            <input type="text" name={formInput} value = {values[formInput]} id={values.id ? values.id + "-" + formInput : formInput} className= {formInput}  onChange = {changedInput}/>
                            
                            
                        </Fragment>
                })}
            {isWorkExperience(formTitle) && (<button type = "button" onClick = {deleteWorkExperience} className = "delete-work-experience"> Delete </button>)}
                
            </div>
            
        </div>
                
        </>

        

    )


    

}