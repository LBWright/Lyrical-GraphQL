import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
	render() {
		if (this.props.data.loading){
			return <div></div> //Loading
		}
		return (
			<div>
				<Link to='/'>Back</Link>
				<h3>{this.props.data.song.title}</h3>
				<LyricCreate songId={this.props.params.id}/>
				<LyricList lyrics={this.props.data.song.lyrics}/>
			</div>
		);
	}
}



export default graphql(fetchSong, {
	options: (props)=>{return {variables: {id: props.params.id}}}
})(SongDetail);