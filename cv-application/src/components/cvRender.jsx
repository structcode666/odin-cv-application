export function CvRender({formObject}){
    return(
        <>

        {
            Object.entries(formObject).map((formEntry)=>{

                if(formEntry[0] == "id") return



                return <div key= {formEntry[0]} className={formEntry[0]}>{formEntry[1]}</div>
            })
        }
        </>
    )
}