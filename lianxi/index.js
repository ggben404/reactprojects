import React from 'react'
import ReactDom from 'react-dom'

//创建一个元素 简单的JS
//const app = <h1>Welcome React</h1>
//创建一个方法 添加属性值（props)
// const createApp = (props) =>{
//     return(
//         <div>
//             {/*只要在jsx中插入js的代码，就加一层花括号即可，注释也是JS，所以也加一层花括号 */}
//         <h1>Welcome React...{props.title}</h1>
//         <p>优秀的{props.title}</p>
//     </div>
//     )
// }
// const app = createApp({
//     title:'react'
// })

//方法为标签调用(创建组件的第一种方式 ：箭头函数，开头字母大写)
const App = (props) =>{
        return(
            <div>
                {/*只要在jsx中插入js的代码，就加一层花括号即可，注释也是JS，所以也加一层花括号 */}
            <h1 title={props.title}>Welcome React...!!{props.title}</h1>
            <p>优秀的{props.title}</p>
        </div>
        )
    }

ReactDom.render(
    <App title="react"/>,
    document.querySelector('#root')
)