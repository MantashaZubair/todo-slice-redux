import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './App.jsx'
import './index.css'
import todostore from './todoStore.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={todostore}>
 <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
 
)


/*
contextprovider in React

context:what is context means additional information that usefull for complete functionality 
provider :the person /entity which is giving out the context you (a component)

<Provider context={}>
<App/> =>Header,Footer,TodoList,.....=> can get access to the actualContext
</Provider>

//ReactRedux //offical React binding for redux
its a ui binding for redux when it comes to react

Hookes?yes
customHooks??--Hookes we create=> we => use=,we=react reduxt library developer

useDispatch(), useSelector() ==>react-redux &not redux library


*/
