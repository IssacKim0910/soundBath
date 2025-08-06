import profilePic from '../assets/images.jpg'

export default function Card() {
    return (
        <div className="card">
            <img className="card-image w-full" src={profilePic} alt="profile picture"/>
            <h2 className='card-title text-center'>Kim</h2>
            <p className='card-text text-center'>I make Coffee</p>
        </div>
    )

}