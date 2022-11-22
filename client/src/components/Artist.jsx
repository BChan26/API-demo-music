import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Artist () {

    const [artist, setArtist] = useState([])




    const getData = async () => {
        await axios.get('http://localhost:3001/music/artist')
        .then(response => {
            if (response) {
                setArtist(response.data)
                console.log(response.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div className="artist">
            {artist.map((value) => {
            console.log(value)
            return (
            <div key={value.id}>
            <h3>Name: {value.name}</h3>
            <h4>Est: {value.yearFormed}</h4>
            <h4>Number of Albums: {value.numberOfAlbums}</h4>
            <br />
            </div>
            )
            
            })}
            

        </div>
    )
}