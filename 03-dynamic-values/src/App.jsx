import './App.css'

function App() {
  const image =
  "https://assets-in.bmscdn.com/discovery-catalog/events/et00430623-lypqqgsjtj-landscape.jpg"
  const name = "Dragon";
  const age = 26 ;
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap";

    // if(age < 18){
    //    return(
    //   <>
    //     <div className="card">

    //       <img src={image} alt="" />
    //       <h1>{name}</h1>
    //       <h4>{age}</h4>
    //       <p>{description}</p>
    //       <button>Not Available</button>

    //     </div>
    //   </>
    // )
    // }

    return(
      <>
        <div className="card">

          <img src={image} alt="" />
          <h1>{name}</h1>
          <h4>{age}</h4>
          <p>{description}</p>
          <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>

        </div>
      </>
    )

  }


  export default App;