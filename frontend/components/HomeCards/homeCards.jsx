import styleHomeCards from './homeCards.module.css'
import Image from 'next/image'

export default function HomeCards(props){
  //PROPS:
  //[team]: icon player
  //[name]: name player
  //[balance]: balance player
  //[bgColor] backgroundColor card

  let bgColor = ''
  if(props.team == 'Black'){
    bgColor = '#000000'
  }else if(props.team == 'Green'){
    bgColor = '#27AE60'
  }else if(props.team == 'Red'){
    bgColor = '#E74C3C'
  }else if(props.team == 'White'){
    bgColor = '#C4C4C4'
  }else if(props.team == 'Blue'){
    bgColor = '#2980B9'
  }else if(props.team == 'Yellow'){
    bgColor = '#F1C40F'
  }else if(props.team == 'Banco'){
    bgColor = '#00A221'
  }


  return(
    <div className={styleHomeCards.div_global} style={{backgroundColor: bgColor}}>
      <div className={styleHomeCards.div_img_name}>
        <Image  alt='icon' width={48} height={48} src={`/images/team/team${props.team}.png`}/>
        <p className={styleHomeCards.name} style={{color: props.team == 'White'? '#000' : ''}}>{props.name}</p>
      </div>
      <p className={styleHomeCards.balance} style={{color: props.team == 'White'? '#000' : ''}}>R${props.balance}</p> 
    </div>
  )
}