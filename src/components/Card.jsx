import './styles/Card.css'

const Card = ({ titulo }) => {
    return (
        <div className="container">
            <div className="card">
                <h2 className="title">{titulo}</h2>
                <div className="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                </div>
                <div className="img">
                    <img src="https://picsum.photos/400/300" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card