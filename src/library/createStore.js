
// handler => a function that hold the logic fo rupdating the state
// library does not khow what is handler we need to pass it where we pass is inside store
const createStore=(/*intialState,*/reducer)=>{

 let state
 const subcribers=[]
 const getState=()=>{
    return state;
 }

//  ACTION ais an object now with type and payload
// idea of dispatch is to be invokes such that a new state is "assigne"
 const dispatch=(action)=>{
    // going to update the state "not really"
   //  handler(state)
   console.log(action)
   // reducer(state,action)
    state=  reducer(state,action) // this become the new state
   console.log(action)
    subcribers.forEach((callback)=>callback())
 }

 dispatch({}) // this empty object is refering a dummy state
 const subscribe=(cb)=>{
     subcribers.push(cb)
 }
 return {
    getState,    //return object
    dispatch,
    subscribe
 }
}

export default createStore;

// const store= createStore({...initial})
//store.getState()
// Abstraction library show just necessary thing not everything 


// management have 4 process 
// 1 initilizinig the state //
// 2 read the state //
// 3 update the state  // we have some information in the state we have component which are tring to update the action of making canges to the stiore can we think like dispaching so,mething
// 4 subscribing the state//


// pure function





