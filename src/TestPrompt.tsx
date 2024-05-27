/*
 * @Author: nabaonan
 * @Date: 2024-05-27 23:42:57
 * @LastEditors: nabaonan
 * @LastEditTime: 2024-05-28 00:26:33
 * @FilePath: /test-leavebreak/src/TestPrompt.tsx
 * @Description: 
 */
import { useState } from "react";
import { Prompt, useHistory } from "react-router-dom";

const TestPromp = () => {

  const history = useHistory()



  const [isBlock, setIsBlock] = useState(true);
  const [open, setOpen] = useState(false)
  const [targetPathname, setTargetPathname] = useState<string>('');

  const handleConfirm = () => {

    setIsBlock(false)
    setOpen(false)

    //需要等待锁释放之后才能跳转
    setTimeout(() => {

      history.push(targetPathname)//从新跳转之前要跳转的页面
      console.log('确认')
    }, 100)
  }

  const cancel = () => {
    setOpen(false)
  }


  return <>


    <dialog className="dialog blue" open={open}>
      <p>确认离开么<br />
      </p>
      <button onClick={cancel}>取消</button>
      <button onClick={handleConfirm}>确定</button>
    </dialog>
    <Prompt when={isBlock} message={(location) => {
      console.log(location, history)

      if (location.pathname !== history.location.pathname) {
        setTargetPathname(location.pathname)
        setIsBlock(true)
        setOpen(true)
        return false//返回false是拦截
      } else {
        setIsBlock(false)
        return true//true是放行
      }
    }}></Prompt>


    <div className="card">

      <h1>
        测试prompt
      </h1>

      <p className="read-the-docs">
        返回就触发自定义弹框
      </p>


    </div>


  </>


}


export default TestPromp;