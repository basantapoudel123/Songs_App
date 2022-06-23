import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({song}) => {
    if(!song){
        return <div>Please, Select a Song</div>
    }

    return(
        <div>
            <h2>Details for:</h2>
            <h4>
               Title: {song.title}
               <br />
               Duration: {song.duration} 
            </h4>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);