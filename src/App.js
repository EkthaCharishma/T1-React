import logo from './logo.svg';
// import './App.css';
import React,{Component} from 'react';
// import FBCPropex1 from './Component/FBCPropex1';
import PropsChildrenEx from './propsexample/propsChildrenEx';
import ChildProps from './propsexample/ChildProps';

// const App=()=> {
//   return (
//     <div>
//       <FBCPropex1
//       username="Ektha"
//       isLoggedIn={false}
//       hobbies={['Reading', 'Writing']}
//       />
//     </div>
//   );
// }
// export default App;

const App=()=>{
  return(
    <div>
      <PropsChildrenEx username="Ektha" company="Meta">
      <h1>This data is passed as props children</h1>
      <ChildProps/>
      </PropsChildrenEx>
    </div>
  )
}
export default App;