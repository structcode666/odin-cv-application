export function CvHeadingRender({name, phoneNumber, email}){
    return(
        <>
            <div className="name"> {name}</div>
            <div className="phoneNumber"> {phoneNumber}</div>
            <div className="email">{email}</div>
        </>
    )
}