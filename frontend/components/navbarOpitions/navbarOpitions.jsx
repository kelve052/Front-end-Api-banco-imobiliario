import styleNavOption from './navbarOpitions.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavbarOpitions(props){

  //PROPS:
  //[COLOR] add  color yellow in icon
  let iconHouse = 'iconHouse.png'
  let iconMorePeople = 'iconMorePeople.png'
  let iconTransaction = 'iconTransaction.png'
  let settings = 'iconSettings.png'


  let classBrilhoHouse = ''
  let classBrilhoPeople = ''
  let classBrilhoTransaction = ''
  let classBrilhoSettings = ''



  if(props.color == 1){
    iconHouse = 'iconHouseYellow.png'    
    classBrilhoHouse = styleNavOption.brilho
  }else if(props.color == 2){
    iconMorePeople = 'iconMorePeopleYellow.png'
    classBrilhoPeople = styleNavOption.brilho
  }else if(props.color == 3){
    iconTransaction = 'iconTransactionYellow.png'
    classBrilhoTransaction = styleNavOption.brilho
  }else if(props.color == 4){
    settings = 'iconSettingsYellow.png'
    classBrilhoSettings = styleNavOption.brilho
  }
  return(
    <section className={styleNavOption.section_global}>
      <Link href={'/'}>
        <Image className={`${styleNavOption.icons} ${classBrilhoHouse}`} alt='icons' width={22} height={22} src={`/images/icons/${iconHouse}`}/>
      </Link>
      <Link href={'/outherPages/addplayers/addPlayers'}>
        <Image className={`${styleNavOption.icons} ${classBrilhoPeople}`} alt='icons' width={22} height={22} src={`/images/icons/${iconMorePeople}`}/>
      </Link>
      <Link href={'/outherPages/transactions/transactions'}>
        <Image className={`${styleNavOption.icons} ${classBrilhoTransaction}`} alt='icons' width={22} height={22} src={`/images/icons/${iconTransaction}`}/>
      </Link>
      <Link href={'/outherPages/settings/settings'}>
        <Image className={`${styleNavOption.icons} ${classBrilhoSettings}`} alt='icons' width={22} height={22} src={`/images/icons/${settings}`}/>
      </Link>
    </section>
  )
}