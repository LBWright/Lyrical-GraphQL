import gql from 'graphql-tag'

export default gql`

query FetchSong($id: ID!){
	song(id: $id){
		title
		id
		lyrics{
			id
			content
		}
	}
}`