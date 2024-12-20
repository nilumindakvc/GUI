import './HomeCard.css'
export default function HomeCard({discription}){
    return(
        <div className='homecard_container'>
          <p>{discription}</p>
        </div>
    )
}