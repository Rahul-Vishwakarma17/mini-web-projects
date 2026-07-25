
// we are making the context.jsx and reducer.jsx for context api and usecontext hook 
// same work as props are doing with herosection in about.jsx and home.jsx 

//Logic
// create a context (database jaisha)
// provider 
// consumer / 

import React, { useContext, useReducer } from "react";
import reducer from "./reducer"
import { useEffect } from "react";

const AppContext = React.createContext();
const API = "https://gist.githubusercontent.com/RahulRamshs/817b0874d3d92c259d7efed3f6de1092/raw/e86e54bb06dc435003b336a2e5371cce7f92167b/gistfile1.txt"
// here for proper link of json file for more detail go in services

const intialState = {
    name:"",
    image:"",
    services: [],
}



const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState)

    const updateHomePage = () => {
        return dispatch({
            type:"HOME_UPDATE",
            payload:{
                name:"Rahul",
                image:"./images/hero.png",
            },
        })
    }
    
    const updateAboutPage = () => {
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                name:"Rahul",
                image:"./images/about.png",
            },
        })
    }

    // to get api data 
    const getServices = async (url) =>{
        try {
            const res = await fetch(url);
            const data = await res.json()
            dispatch({type:"GET_SERVICES", payload: data})
        } catch (error) {
            console.log(error)
            
        }
    }


    // to call the api 

    useEffect(() => {
      getServices(API)
    }, [])
    

    return <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
        {children}
    </AppContext.Provider>;
};


// now we are making it globally for small code 

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}


