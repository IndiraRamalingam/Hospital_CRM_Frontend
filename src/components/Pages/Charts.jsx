import React, { useState,useEffect } from 'react'
import SideBar from './SideBar'
import instance from '../services/instance';
import {Doughnut} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Charts() {

  const[patientCount,setPatientCount]=useState('');
  const[doctorCount,setDoctorCount]=useState('');
  const[contactCount,setContactCount]=useState('');
  const[generalCount,setGeneralCount]=useState('');
  const[peadiatricianCount,setPeadiatricianCount]=useState('')
  const[gynecologistCount,setGynecologistCount]=useState('')
  const[physiotherapistCount,setPhysiotherapistCount]=useState('')
  const[diabetologistCount,setDiabetologistCount]=useState('')
  const[gastroenterologistCount,setGastroenterologistCount]=useState('')


  useEffect(()=>{
    viewPatientCount()
    viewDoctorCount()
    viewContactCount()
    viewSpecialistCount()
},[]);

// To get patient count from API
const viewPatientCount = async() =>{
    try{
        const response = await instance.protectedInstance.get('/admin/patients');
        setPatientCount(response.data.countOfPatients)
    }
    catch(error)
    {
        console.log("Error in fetching patients ", error)
    }
}

// To get doctor count from API
const viewDoctorCount = async() =>{
  try{
      const response = await instance.protectedInstance.get('/admin/getAllDoctorName');
      setDoctorCount(response.data.countOfDoctors)
  }
  catch(error)
  {
      console.log("Error in fetching patients ", error)
  }
}

// To get contact count from API
const viewContactCount = async() =>{
  try{
      const response = await instance.protectedInstance.get('/admin/getAllContacts');
      setContactCount(response.data.countOfContacts)
  }
  catch(error)
  {
      console.log("Error in fetching patients ", error)
  }
}

//To get the count of each Specialist
const viewSpecialistCount = async() =>{
  try{
      const response = await instance.protectedInstance.get('/admin/doctors');
      setGeneralCount(response.data.countOfgeneral)
      setPeadiatricianCount(response.data.countOfPaediatrician)
      setDiabetologistCount(response.data.countOfDiabetologist)
      setGastroenterologistCount(response.data.countOfGastroenterologist)
      setGynecologistCount(response.data.countOfGynecologist)
      setPhysiotherapistCount(response.data.countOfPhysiotherapist)
  }
  catch(error)
  {
      console.log("Error in fetching patients ", error)
  }
}


//To display the count of patient,doctor and queries
  const data = {
    labels: ['Patient','Doctor','Queries'],
    datasets: [
        {
            label: 'Count',
            data: [patientCount,doctorCount,contactCount],
            borderColor: ['rgba(255,206,86,0.2)'],
            backgroundColor: ['rgba(232,99,132,1)',
            'rgba(232,211,6,1)',
            'rgba(54,162,235,1)',
            ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
        }
        
    ]
}
const options = {
   maintainaspectratio: false,
  plugins: {
      title: {
          display: true,
          text: 'Counts',
          color:'#301091',
          font: {
              size:34
          },
          padding:{
              top:30,
              bottom:30
          },
          responsive:true,
          animation:{
              animateScale: true,
            },                     
      }
  }  
}

//To display the specialist count

const data1 = {
  labels: ['General Physician','Paediatrician','Gynecologist','Physiotherapist','Diabetologist','Gastroenterologist'],
  datasets: [
      {
          label: 'Count',
          data: [generalCount,peadiatricianCount,gynecologistCount,physiotherapistCount,diabetologistCount,gastroenterologistCount],
          borderColor: ['rgba(255,206,86,0.2)'],
          backgroundColor: ['rgba(232,99,132,1)',
          'rgba(232,211,6,1)',
          'rgba(54,162,235,1)',
          'RGB(40, 167, 69)',
          '	RGB(249, 203, 82)',
          '	RGB(180, 75, 161)',
          ],
          pointBackgroundColor: 'rgba(255,206,86,0.2)',
      }
      
  ]
}
const options1 = {
 maintainaspectratio: false,
plugins: {
    title: {
        display: true,
        text: 'Counts Of Specialist',
        color:'#301091',
        font: {
            size:34
        },
        padding:{
            top:30,
            bottom:30
        },
        responsive:true,
        animation:{
            animateScale: true,
          },                     
    }
}  
}

  return (
   
    <div id="page-top">
        <div id="wrapper">
        <SideBar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
       
                  <div className='row'>
                    <div className='col-sm-6'>
                    <div className='dough'>
                      <Doughnut data={data} options={options} />
                    </div>
                    </div>
                    <div className='col-sm-6'>
                    <div className='dough'>
                      <Pie data={data1} options={options1} />
                    </div>
                    </div>
                    </div>
                  <div className='row'>                 
                    <div className='col-sm-8'>
                    <div className='dough'>
                      <Bar data={data1} options={options1} />
                    </div>
                    </div>    
                    </div>
           
            </div>
            <a className="backtotop" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>        
          </div>
        </div>
      </div>
  )
}

export default Charts