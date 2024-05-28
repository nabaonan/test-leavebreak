/*
 * @Author: nabaonan
 * @Date: 2024-05-15 22:42:30
 * @LastEditors: nabaonan
 * @LastEditTime: 2024-05-29 00:31:32
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
import TestPrompt from './TestPrompt';
import { useRef, useState } from 'react';
import TestPrompt2 from './TestPrompt2';



function App() {

  const callbackRef = useRef<(ok: boolean) => void>()
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)


  const handleConfirm = () => {

    setOpen(false)

    //需要等待锁释放之后才能跳转
    callbackRef.current?.(true)
  }

  const cancel = () => {
    callbackRef.current?.(false)
    setOpen(false)
  }


  return (
    <>

      <Router

        getUserConfirmation={(message, callback) => {
          callbackRef.current = callback
          setMessage(message)
          setOpen(true)
        }
        }
      >
        <div>
          <Link to="/" className='link'>首页</Link>
          {/* <Link to="/other" className='link'>其他页面</Link> */}
          <Link to="/block" className='link'>block的方式</Link>
          <Link to="/prompt" className='link'>prompt的方式</Link>
          <Link to="/prompt2" className='link'>路由自定义prompt2方式</Link>
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

            <Route path="/block">
              <TestBlock></TestBlock>
            </Route>

            <Route path="/prompt">
              <TestPrompt></TestPrompt>
            </Route>
            <Route path="/prompt2">
              <TestPrompt2></TestPrompt2>
            </Route>
          </Switch>
        </div>
      </Router>



      <dialog className="dialog red" open={open}>
        <p>{message}<br />

        </p>
        <button onClick={cancel}>取消</button>
        <button onClick={handleConfirm}>确定</button>
      </dialog>
    </>
  )
}

export default App
