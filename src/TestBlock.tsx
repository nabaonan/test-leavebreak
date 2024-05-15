import { useEffect, useRef, useState } from "react"
import { useHistory } from "react-router-dom"

/*
 * @Author: nabaonan
 * @Date: 2024-05-15 23:23:11
 * @LastEditors: nabaonan
 * @LastEditTime: 2024-05-16 00:28:02
 * @FilePath: /test-leavebreak/src/TestBlock.tsx
 * @Description: 
 */
const TestBlock = () => {

  const history = useHistory()

  const [open, setOpen] = useState(false)
  const unblockRef = useRef<() => void>(() => { });
  const [targetPathname, setTargetPathname] = useState<string>('');


  const handleConfirm = () => {

    setOpen(false)
    if (unblockRef.current) {

      unblockRef.current();//释放限制
    }
    history.push(targetPathname)//从新跳转之前要跳转的页面
    console.log('确认')
  }

  const cancel = () => {
    setOpen(false)
  }


  useEffect(() => {
    // 这是官方使用方法
    // https://github.com/remix-run/history/blob/main/docs/blocking-transitions.md    //这个方法感觉对当前版本不适用，没有retry方法

    //腾讯云blog  https://cloud.tencent.com/developer/article/2384096
    unblockRef.current = history.block((tx, action) => {

      console.log('tx都有啥', action)
      setTargetPathname(tx.pathname)

      const isBlock = history.location.pathname != tx.pathname
      setOpen(isBlock)

      return isBlock == true ? false : true ////返回false是阻塞， 返回true是不阻塞


    })
    return () => {
      unblockRef.current()
    }
  }, [history])

  return <>
    <dialog className="dialog" open={open}>
      <p>确认离开么<br />
      </p>
      <button onClick={cancel}>取消</button>
      <button onClick={handleConfirm}>确定</button>
    </dialog>

    <div className="card">

      <h1>
        测试block
      </h1>

      <p className="read-the-docs">
        返回就触发自定义弹框
      </p>


    </div>
  </>
}


export default TestBlock  