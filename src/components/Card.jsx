import profilePic from '../assets/images.jpg'
import StateCom from "./StateCom";
import OnChange from "./OnChange";

export default function Card() {
    const imgUrl = './src/assets/images.jpg'
    const handleClick = () => console.log('img clicked');
    const removeClick = (e) => e.target.style.display ='none';
    return (
        <>
        <div className="card">
            <img onClick={removeClick} className="card-image w-full" src={imgUrl} alt="profile picture"/>
            <h2 className='card-title text-center'>Kim</h2>
            <p className='card-text text-center'>I brew Coffee</p>
        </div>
        <StateCom />
        <OnChange />
        </>

    )

}