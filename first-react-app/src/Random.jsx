function Random(){
    let number = Math.floor(Math.random() * 10);
    return(
        <>
        <h1 style = {{'background-color': '#776650'}}>Random Number is : {number}</h1>
        </>
    )
}

export default Random;