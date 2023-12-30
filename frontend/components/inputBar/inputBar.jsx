import { useEffect, useState } from 'react'
import styleImput  from './inputBar.module.css'

export default function InputBar (props) {
  const [cor, userCor] = useState("#ffffff")
  useEffect(()=>{
    if(props.valueInvalid == true){
      userCor("#E74C3C")
    }
  })

  const muarCor = ()=>{ //Function muda a cor do texto enquando dijita no imput
    const letrasHex = '0123456789ABCDEF';
    let corTime = '#'
    for(let c = 0; c<6;c++){
      corTime +=letrasHex[Math.floor(Math.random() * 16)]
    }
    userCor(corTime)
  }
  return(
    <div lassName={styleImput.inputBar}>
      <p className={styleImput.p_text}>{props.text}</p>
      <input onBlur={()=>userCor("#fff")} onChange={muarCor} style={{width: props.width, color: cor, borderColor: cor}} placeholder={props.placeholder} type="text" className={styleImput.input} />
    </div>
  )
}