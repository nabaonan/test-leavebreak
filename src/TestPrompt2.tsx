/*
 * @Author: nabaonan
 * @Date: 2024-05-28 23:44:00
 * @LastEditors: nabaonan
 * @LastEditTime: 2024-05-29 00:30:52
 * @FilePath: /test-leavebreak/src/TestPrompt2.tsx
 * @Description: 
 */
import { useState } from "react"
import { Prompt, } from "react-router-dom"

const Prompt2 = () => {



  const [isBlock, setIsBlock] = useState(true)




  return <>
    <div>

      当前状态： {isBlock ? '拦截' : '放行'}
    </div>
    <div>

      <button onClick={() => {
        setIsBlock(true)
      }}>拦截</button>
      <button onClick={() => {
        setIsBlock(false)
      }}>放行</button>
    </div>

    <Prompt when={isBlock} message={'自定义---确定你要返回么！！！！！'}></Prompt>
  </>

}

export default Prompt2