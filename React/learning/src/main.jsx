import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createContext } from 'react'
import './index.css'
import App from './App.jsx'
import Events from "./components/EventBind.jsx";
import ParentMethod from "./components/ParentComponent.jsx";
import IfElse from "./components/conditionRending/IfElse.jsx";
import LogicalOperator from './components/conditionRending/LogicalOperator.jsx';
import ListRending from './components/ListRending.jsx';
import Styling from './components/Styling.jsx';
import UseState from './components/UseState/UseState.jsx';
import UseArray from './components/UseState/UseArray.jsx';
import FunctionState from './components/Useeffect/FunctionState.jsx';
import CompA from './components/UseContext/CompA.jsx';
import Multihandle from './components/FormHandling/Multihandle.jsx'


export const NameContext = createContext();
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <App />
    <Events />
    <IfElse />
    <LogicalOperator />
    <ListRending />
    <Styling />
  <UseState />
  <UseArray />
    <FunctionState />
    <ParentMethod /> */}
  <Styling />
  <Multihandle />

  <NameContext.Provider value={"Vraj"}>
    <CompA />
  </NameContext.Provider>

  </StrictMode>,
)
