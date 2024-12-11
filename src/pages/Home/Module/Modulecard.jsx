import './Modulecard.css'
export default function Modulecard({modulename,code,lecture,credit,gpa}){
    return(
        <div className="module_card">
        <p>{modulename}</p>
        <p>{code}</p>
        <p>{lecture}</p>
        <p>{credit}</p>
        <p>{gpa}</p>
        <div className='modulecard_button'>
        <button className='modulecard_button_button'>visit</button>
        </div>
        
        </div>

    )
}