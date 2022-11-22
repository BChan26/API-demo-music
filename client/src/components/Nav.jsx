import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <div><Link className="nav-home"to ="/">Home|</Link></div>
            <div><Link className="artist-home"to="/Artist">Artist</Link></div>
        </div>
    )
}