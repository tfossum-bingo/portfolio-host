// /* eslint-disable no-lone-blocks */
// import React, { useState } from 'react'
// import axios from 'axios'
// const ApiClient = axios.create({ baseURL: 'http://localhost:3001/api/' })
// const { get, put, post } = ApiClient, del = ApiClient.delete

// const httpRequest = async (routeAndPayload) => {
//     // const {body} = inspectPayload(payload.body, {}), params = inspectPayload(payload.params, "")
//     // const userRequestedData = inspectPayload(dataRequest, false)
//     console.log("httpRequest() called with routeAndPayload: ", routeAndPayload )
//     try {
//         const response = await routeAndPayload()
//         console.log("response object returned from back-end: ", response)
//         return response
//     } catch (error) {
//         console.log("Error received in Mothership.js, httpRequest() response try-catch: ", error)
//     }
// }

<<<<<<< HEAD
// exports.Mothership = (props) => {
=======
const Mothership = (props) => {
>>>>>>> f48d43021353c76f8f66f36b6a862f3e85cdeb1b

//     /* Database Table Columns */
//     const userFields =     ["name", "email", "password"]
//     const profileFields =  [ "userId", "profilePicture", "professionalTittle", "organization", "profilePicture", "professionalTittle", "skills", "locale", "bio" ]
//     const projectsFields = [ /**"userId",**/ "title", "description", "technologies", "projectPicture", "deployLink" ]

//     /* Hooks/State for User */
//     const [userController, selectUserController]  =  useState({controllerName: "", currentPayload: null})
//     const [userPayload, setUserPayload]           =  useState({body:{}, params: ""})

//     /* Hooks/State for Project */
//     const [projectController, selectProjectController]  =  useState({controllerName: "", currentPayload: null})
//     const [projectPayload, setProjectPayload]           =  useState({body:{}, params: ""})

    // /* Hooks/State for Profile */
    // const [profileController, selectProfileController]  =  useState({controllerName: "", currentPayload: null})
    // const [profilePayload, setProfilePayload]           =  useState({body:{}, params: ""})

//     const database = {
//         User: {
//             nameOfSelectedController: userController.controllerName,
//             requests :  {
//                 LogInUser : {
//                     payloadDefaultsForInputFields   :  {body : ["name", "email"], params: ""},
//                     finalPayload                    :  () => post(`users/login${userPayload.params}`,  userPayload.body)
//                 },  
//                 CreateUser : { 
//                     payloadDefaultsForInputFields   :  {body : userFields, params: ""},
//                     finalPayload                    :  () => post(`users/create${userPayload.params}`, userPayload.body)
//                 }, 
//                 ReadUser : { 
//                     payloadDefaultsForInputFields   :  {body : [], params:"userId"},
//                     finalPayload                    :  () => put(`users/update${userPayload.params}`, userPayload.body)
//                 },  
//                 UpdateUser : { 
//                     payloadDefaultsForInputFields   :  {body : ["name", "email", "password"], params: ""},
//                     finalPayload                    :  () => post(`users/login${userPayload.params}`, userPayload.body)
//                 },  
//                 DeleteUser : { 
//                     payloadDefaultsForInputFields   :  {body : [], params: "userId"},
//                     finalPayload                    :  () => del(`users/delete${userPayload.params}`, userPayload.body)
//                 }, 
//             },
//             state : {
//                 controllerHandler  :  selectUserController, 
//                 controller         :  userController,
//                 setPayload         :  setUserPayload, 
//                 payload            :  userPayload,
//             }  
//         }, 
//         Profile: { 
//             nameOfSelectedController: profileController.controllerName,
//             requests :  { 
//                 CreateProfile : {
//                     payloadDefaultsForInputFields   :   {body : profileFields, params: "user"},
//                     finalPayload                    :   () => post(`profile/create${profilePayload.params}`, profilePayload.body)
//                 },   
//                 ReadProfile : {  
//                     payloadDefaultsForInputFields   :   {body : [], params: "profileId"},
//                     finalPayload                    :   () => get(`profile/read${profilePayload.params}`,    profilePayload.body)
//                 },  
//                 ReadAllProfiles : {  
//                     payloadDefaultsForInputFields   :   {body : [], params: ""},
//                     finalPayload                    :   () => get(`profile/${profilePayload.params}`,    profilePayload.body)
//                 },   
//                 UpdateProfile : {  
//                     payloadDefaultsForInputFields   :   {body : ["name", "email"], params: "profileId"},
//                     finalPayload                    :   () => put(`profile/update/${profilePayload.params}`,  profilePayload.body)
//                 }
//             }, 
//             state : { 
//                 controllerHandler  :  selectProfileController, 
//                 controller         :  profileController,
//                 setPayload         :  setProfilePayload, 
//                 payload            :  profilePayload,
//             }  
//         }, 
//         Projects: { 
//             nameOfSelectedController: projectController.controllerName,
//             requests :  { 
//                 CreateProject : {
//                     payloadDefaultsForInputFields   :   {body : projectsFields, params: "userId"},
//                     finalPayload                    :   () => post(`projects/create${profilePayload.params}`, profilePayload.body)
//                 },  
//                 ReadProject : { 
//                     payloadDefaultsForInputFields   :   {body : [], params: "projectId"},
//                     finalPayload                    :   () => get(`projects/read${profilePayload.params}`,    profilePayload.body)
//                 }, 
//                 GetAllProjects : { 
//                     payloadDefaultsForInputFields   :   {body : [], params: "userId"},
//                     finalPayload                    :   () => get(`projects/read${profilePayload.params}`,    profilePayload.body)
//                 },  
//                 UpdateProject : { 
//                     payloadDefaultsForInputFields   :   {body : projectsFields, params: "userId"},
//                     finalPayload                    :   () => put(`projects/update${profilePayload.params}`,  profilePayload.body)
//                 }
//             }, 
//             state : { 
//                 controllerHandler  :  selectProjectController, 
//                 controller         :  projectController,
//                 setPayload         :  setProjectPayload, 
//                 payload            :  projectPayload,
//             } 
//         },
//     }
//     const [db, setDb] = useState(database)
    
//     return (<div></div>)
// }


// //* Mothership Page accepts props only from Mothership
// exports.MothershipPage = (props) => {
//     /* Styles */
//     const pageFontFamily = "Roboto, sans-serif"
//     const primaryTextColor = "#90caf9"
//     const secondaryTextColor = "white"
//     const styles = {
//         pageWrapper: {
//             position: "relative",
//             top: "0",
//             bottom: "0",
//             left: "0",
//             right: "0",
//             minHeight: "100vw",
//             minWidth: "100vw",
//             padding: "0px 15px 0px 15px", 
//             backgroundColor: "#121212"
//         },
//         pageTitle: {
//             marginTop: "0px",
//             paddingTop: "3vh",
//             fontSize: "44px", 
//             textAlign: "center",
//             color: primaryTextColor,
//             fontFamily: pageFontFamily,
//             fontWeight: "900"
//         },
//         mainWrapper: {
//             width: "85%",
//             display: "grid", 
//             gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//             gridGap: "1.8rem",
//             margin: "0 auto",
//             padding: "20px",
//             borderRadius: "10px", 
//             backgroundColor: "#121212", 
//             color: secondaryTextColor
//         },
//         DatabaseModelWrapper: {
//             position: "relative",
//             minWidth: "300px", 
//             maxWidth: "400px",
//             minHeight: "400px",
//             maxHeight: "80vh",
//             backgroundColor: '#424242',
//             textAlign: "center",
//             fontFamily: pageFontFamily,
//             borderRadius: "10px", 
//             boxShadow: "0 0 3px white",
//             paddingBottom: "30px"
//         },
//         requestScrollPanel: {
//             width: "85%",
//             margin: "0 auto",
//             padding: "7px",
//             paddingBottom: "3px",
//             color: secondaryTextColor,
//             backgroundColor: "#bdbdbd",
//             fontFamily: pageFontFamily, 
//             borderRadius: "7px",
//             overflow: "auto", 
//             maxHeight: ''
//         },
//         controllerScrollItem: {
//             width: "95%",
//             padding: "6px",
//             margin: "0 auto 4px auto",
//             fontSize: "20px",
//             textAlign: "left",
//             fontFamily: pageFontFamily,
//             color: secondaryTextColor,
//             backgroundColor: "#2e2e2e",
//             boxShadow: "0 0 2px black",
//             borderRadius: "4px",
//             fontWeight: "800",
//             cursor: "pointer"
//         },
//         sendRequestButton: {
//             width: "85%",
//             bottom: "10px",
//             left: "0px", 
//             right: "0px",
//             padding: "6px",
//             margin: "12px auto 4px auto",
//             fontSize: "20px",
//             textAlign: "center",
//             fontFamily: pageFontFamily,
//             color: primaryTextColor,
//             backgroundColor: "#2e2e2e",
//             boxShadow: "0 0 0 1px black",
//             borderRadius: "4px",
//             fontWeight: "800"
//         },
//         form:  {
//             width: "85%",
//             margin: "10px auto 0 auto",
//             padding: "7px",
//             paddingBottom: "3px",
//             color: secondaryTextColor,
//             backgroundColor: "#bdbdbd",
//             fontFamily: pageFontFamily, 
//             borderRadius: "7px",
//             overflow: "auto", 
//             position: "relative"
//         },
//         inputField: {
//             backgroundColor: "white",
//             boxShadow: "0 0 0 1px rgba(0,0,0,.6)",
//             width: "95%", 
//             borderRadius: "3px",
//             padding: "6px",
//             margin: "0 auto 4px auto",
//             fontSize: "14px",
//             textAlign: "left",
//             fontFamily: pageFontFamily,
//             color: "black",
//         }
//     }
//     let s = styles  // rename to abbreviate
//     const {database} = props
//     const models = Object.keys(database)   

//     return (
//         <div style={s.pageWrapper}> 
//             <h1 style={s.pageTitle}>Full Stack Route Testing</h1>
//             <main style={s.mainWrapper}>
//                 {models.map((model) => {
//                     let target, body, params, paramsIsUsed, finalAPIcall
//                     const table = database[model]                                                 // table object captured
//                     const {nameOfSelectedController, requests, state} = table                     // ---> destructure table into it's 3 objects
//                     const {controllerHandler, setPayload, payload} = state                        // ---> destructure state
//                     const requestsKeys = Object.keys(requests)                                    // ---> array of all Controller names as strings, used for iterating with map
//                     const controllerSelected = nameOfSelectedController ? true : false 
//                     if (controllerSelected) { 
//                     target = requests[nameOfSelectedController]                                   // ---> declare selected Controller as an accessible variable   
//                     body = target.payloadDefaultsForInputFields.body                              // ---> declare body to access default fields
//                     params = target.payloadDefaultsForInputFields.params                          // ---> declare body to access default fields
//                     paramsIsUsed = params ? true : false                                          // ---> boolean that conditionally renders an input field for params
//                     finalAPIcall = target.finalPayload                                            // ---> crud Function of selected controller without an added payload.
//                     }               
//                     return (
//                         <div key={model} style={s.DatabaseModelWrapper}>
//                             <h1>{model}</h1>
//                             <div style={s.requestScrollPanel}>
//                                 {requestsKeys.map((controllerNameString) => {
//                                     const finalPayload = (requests[controllerNameString]).finalPayload         
//                                     return (
//                                         <div key={controllerNameString} style={styles.controllerScrollItem} onClick={() => controllerHandler({controllerName: controllerNameString, finalPayload : finalPayload})}>{controllerNameString}</div> 
//                                     )  
//                                 })}
//                             </div>
//                             {controllerSelected  &&
//                             <div>
//                             <form style={s.form}>
//                                 {body.map((tableField, index) => {
//                                     const addToPayload = (e) => {
//                                         let update = e.target.value
//                                         let payloadBody = payload.body
//                                         let params = payload.params
//                                         let mergingObject = {}
//                                         mergingObject[tableField] = update
//                                         let mergedBody = {...payloadBody, ...mergingObject}
//                                         setPayload({body: mergedBody, params: params})
//                                     }
//                                     return <input key={`${index}tablefield`} type={"search"} defaultValue={tableField} onChange={(e) => addToPayload(e)} style={s.inputField}></input>
//                                 })}
//                                     { paramsIsUsed ? 
//                                         (() => {
//                                             const setParams = (e) => {
//                                                 let update = e.target.value
//                                                 let params = payload.params
//                                                 console.log("params before change: ", params)
//                                                 console.log("update to params: ", update)
//                                                 let payloadBody = payload.body
//                                                 setPayload({body: payloadBody, params: update})
//                                             }
//                                             return (<input style={s.inputField} defaultValue={params} onChange={(e) => setParams(e)}></input>)
//                                         })()
//                                     : null } 
//                                 </form>
//                             <button style={s.sendRequestButton} onClick={() => httpRequest(finalAPIcall)}>Send Request</button>
//                             </div>
//                             }
//                         </div>
//                     )
//                 })}
//             </main>
//         </div>
//     )
// }


// // use of data selection tbd

//     // const [userDataRequest, setUserDataReq] = useState([])
//     // const [projectDataRequest,setProjectDataReq] = useState([])
//     // const [profileDataRequest, setProfileDataReq] = useState([])