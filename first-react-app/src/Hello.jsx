function Hello(){
    let name = "Venkatesh";
    let fullName = () =>{
        return 'Venkatesh Khatake'
    }

    return(
        <h1>Hello My name is {fullName()}</h1>
    )
}

export default Hello;