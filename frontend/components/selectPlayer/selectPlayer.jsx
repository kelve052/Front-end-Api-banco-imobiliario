import CardPlayerSetings from '../cardPlayerSettings/cardPlayerSttings'
import styleInputS from './selectPlayer.module.css'

export default function SelectPlayer (props) {
  //PROPS->
  //{nameSelect} defined name of select
  //{id} defined id of select
  //{text} defned title of select
  return(
    <div>
      <p className={styleInputS.p_title}>{props.text}</p>
      <select className={styleInputS.select} name={props.nameSelect} id={props.id}></select>
      <CardPlayerSetings  styleComponent={3} balance='R$4.000,00' name='Marco' img='/images/team/team6.png'/>
    </div>
  )
}