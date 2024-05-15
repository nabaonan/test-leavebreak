/*
 * @Author: nabaonan
 * @Date: 2024-05-15 22:42:30
 * @LastEditors: nabaonan
 * @LastEditTime: 2024-05-16 00:05:31
 * @FilePath: /test-leavebreak/src/App.tsx
 * @Description: 
 */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Other from './Other'
import TestBlock from './TestBlock';


function App() {

  return (
    <>

      <Router>
        <div>






          <Link to="/" className='link'>首页</Link>


          <Link to="/other" className='link'>其他页面</Link>
          <Link to="/block" className='link'>block的方式</Link>


          <Switch>
            <Route exact path="/">


              <div>
                <a target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>测试返回拦截功能</h1>
              <div className="card">

                <p>
                  react-17  ,   react-router-5
                </p>
              </div>

            </Route>
            <Route path="/other">
              <Other />
            </Route>
            <Route path="/block">
              <TestBlock></TestBlock>
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  )
}

export default App
