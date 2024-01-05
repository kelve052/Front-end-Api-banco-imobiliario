import { useEffect, useState } from 'react'
import styleImput  from './inputBar.module.css'

export default function InputBar (props) {
  //PROPS->
  //[isBanck] bloker input: (true / false)
  //[text] add title in input
  //[name] add name in tag of input
  //[placeholder] add placeholder in input
  //[width] defined width input
  //[onChange] envit value for component father

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

  // pegar valor dos imputs e enviar para component pai
  const handleInputChange = (event)=>{
    if(props.onChange){
      props.onChange(event.target.value)
    }
  }
  return(
    <div lassName={styleImput.inputBar}>
      <p className={`${styleImput.p_text} ${props.isBanck? `${styleImput.input_opacity}`: ''}`}>{props.text}</p>
      <input onChangeCapture={handleInputChange} readOnly={props.isBanck} name={props.name} onBlur={()=>userCor("#fff")} onChange={muarCor} style={{width: props.width, color: cor, borderColor: cor}} placeholder={props.placeholder} type="text" className={`${styleImput.input} ${props.isBanck? `${styleImput.input_opacity}`: ''}`} />
    </div>
  )
}