import React, { useState, useEffect} from 'react';








const Store = () => {


const [state, setState] = useState([])
useEffect(() => {
    let url = "https://wellfindapi.herokuapp.com/api/listings/read.php";
    async function fetchData(){
    const res = await fetch(url);
    res
    .json()
    .then(res => setState(res))
}
fetchData();
})
return (
    <>{JSON.stringify(state)}</>
)

}

export default Store;
 
/*

   return(
        <APIContext.Provider value={{ result}}>
            {children}
        </APIContext.Provider>

        */