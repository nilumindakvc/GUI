import './Card.css'
export default function Card({description}){
    function image_select(theme){
        if(theme=="Complex Analysis"){
            return 'card_picture_complex';
        }
        else if(theme=="GUI Programming"){
            return  'card_picture_gui';
        }
        else if(theme=="DSA"){
            return 'card_picture_dsa';
        }
    }
    return(
        <div className="maincontainer_card">
        <div className={image_select(description)}></div>
        <div className='card_description'>{description}</div>
        </div>
    )
}