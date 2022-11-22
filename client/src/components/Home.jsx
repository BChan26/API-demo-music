import { Link } from 'react-router-dom'


export default function Home () {
    return (
        <div className="terminal">
            <div className="typewriter-container">
                <div className ="terminal-bar">
                    <div className ="terminal-buttons">
                        <div className ="red"></div>
                        <div className ="yellow"></div>
                        <div className ="green"></div>
                    </div>
                </div>
                <div className="description-container">
                    <p className="description">~ Hello world! Welcome to type.this!</p>
                    <p className="description2">~ Click one of the links below!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                </div>
                {/* <p className="description3">&lt; or search for a topic! </p> */}

            </div>
            <div className="game-nav">
                    
                </div>
        </div>
    )
}