import React,{Fragment,useEffect,useState} from 'react';
import './index.css';
import Country from '../../components/Country/Country';
import {GetCountriesAll} from '../../api/countries';

const Contries = () =>{

    const [List,setList] = useState([]);

    useEffect(()=>{
        async function GetData(){
            const result = await GetCountriesAll();
            setList(result.data);
        }

        GetData();
    },[])

    return(
        <Fragment>
            <h1>Productos</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="container">
                {
                    List.map(({flag,name,population,region,capital,alpha3Code},index)=>{
                        return(
                            <Country 
                                key={index} 
                                flag={flag} 
                                name={name} 
                                population={population} 
                                region={region} 
                                capital={capital} 
                                alpha3Code={alpha3Code} 
                            />
                        )
                    })
                }
            </div>
        </Fragment>
        
    )
}

export default Contries