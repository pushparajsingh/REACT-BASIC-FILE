import './App.css';
import Functionalcomponent from './1Functionalcomponent.js'
import ClassComponent from './2ClassComponent.js'
import EventAndFunction from './3EventAndFunction.js'
import UseStateHook from './4StateWithFunComponent.js'
import StateWithClassComponent from './5StateWithClassComponent.js'
import PropsWithFunComponent from './6PropsWithFunComponent'
import PropswithClassComponent from './7PropswithClassComponent.js'
import GetInputBoxValue from './8GetInputBoxValue'
import HideShowData from './9HideShowData.js'
import BasicForm from './10HandleForm.js'
import ConditionalRenderingAnd_IFcon from './11ConditionalRenderingAnd_IFcon.js';
import BasicFormValidation from './12BasicFormValidation'
import PassFunctionasProps from './13PassFunctionasProps'
import Bootstrap from './22Bootstrap.js'
import ArrayListingAndMapFun from './ArrayListingAndMapFun.js';
import ComponentDidMount from './14ComponentDidMount'
import ComponentDidupdate from './15ComponentDidupdate.js'
import ShouldComponentUpdate from './16ShouldComponentUpdate.js'
import ComponentWillUnmount from './17ComponentWillUnmount'
import HooksInReactJs from './19HooksInReactJs'
import UseEffect from './20useEffect.js'
import StyleInReact from './21StyleInReact'
import HandleArrayWithList from './23HandleArrayWithList'
import ListWithBootstrapandUnique from './24ListWithBootstrapandUnique.js';
import Send from "./28SendDataChildToParent";
import PureComponent from './29PureComponentInReactjs.js'
import UseMemoHook from './30UseMemoHook.js'
import RefComponent from './31Ref_component.js'
import ReffComponent from './32UseRefComponent.js';
import Forwardref from './33Forwardref.js';
import ControlledComponent from './34ControlledComponent.js';
import UncontrolledComponet from './35UncontrolledComponet.js';
import Hoc from './36HOC.js'
import Routing from './37Routing.js'
import Rout from './38RoutingExample.js'
import Routeee from './39PageNotFound.js'
import DinamicRouting from './40DinamicRouting.js'
import GetMethod from './41GetMethod.js'
import Practice from './Practice.js'



                  
function App(){ //function like ShouldComponentUpdate ,first letter always uppercase

  function data(){
    alert("hello world");
  }
  function parent(val)
  {
       alert(val);
  }
  
  
  return ( 
    <div className='App'>
    {/* <Functionalcomponent/> */}
   {/*<ClassComponent/>
   <EventAndFunction/>
   <UseStateHook/>*/}
   {/* <StateWithClassComponent/> */}
   {/* <PropsWithFunComponent name={"ram"} email="pushparajsingh448@gmail.com" other={{address:"shanti nagar", mobile:"6266466515"}}/>
   <PropsWithFunComponent name={"peter"} email="pushparajsingh448@gmail.com" other={{address:"shanti nagar", mobile:"626646666515"}}/>
   <PropsWithFunComponent name={"ramash"} email="pushparajsingh448@gmail.com" other={{address:"shanti nagar", mobile:"6266466666515"}}/> */}
    {/* <PropswithClassComponent name={"peter"} email="pushparajsingh448@gmail.com" other={{address:"shanti nagar", mobile:"626646666515"}}/> */}
   {/*<PropswithClassComponent name={"ram"} email="pushparajsingh448@gmail.com" other={{address:"shanti nagar", mobile:"6266466515"}}/>
   <PropswithClassComponent name={"ramash"} email="pushparajsingh448@gmail.com" other={{address:"shanti nagar", mobile:"6266466666515"}}/>*/}
   {/* <GetInputBoxValue/> */}
   {/* <HideShowData/> */}
     {/* <BasicForm/> */}
    {/*<ConditionalRenderingAnd_IFcon/> */}
    {/* <BasicFormValidation/> */}
    {/* <PassFunctionasProps fun = {data} /> */}
     {/* <Bootstrap/> */}
     {/* <ArrayListingAndMapFun/> */}
     {/* <ComponentDidMount/> */}
     { /* <ComponentDidupdate/> */ }
     {/* <ShouldComponentUpdate/> */}
     {/* <ComponentWillUnmount/> */}
     {/* <HooksInReactJs/> */}
     {/* <UseEffect/> */}
     {/* <StyleInReact/> */}
     {/* <HandleArrayWithList/> */}
     {/* <ListWithBootstrapandUnique/> */}
     {/* < Send alert={parent}/> */}
     {/* <PureComponent/> */}
     {/* <UseMemoHook/> */}
     {/* <RefComponent/> */}
     {/* <ReffComponent/> */}
     {/* <Forwardref/>  */}
     {/* <h1> Hello World</h1><br/><br/> */}
     {/* <ControlledComponent/> */}
     {/* <UncontrolledComponet/> */}
     {/* <Hoc/> */}
     {/* <Routing/> */}
     {/* <Routeee/> */}
     {/* <DinamicRouting/> */}
     {/* <GetMethod/> */}
      <Practice/>
     {/* <Home/> */}
     

   </div>
  );
}

export default App;
