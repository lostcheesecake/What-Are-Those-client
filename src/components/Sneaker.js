import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../apiConfig'
import Layout from './Layout'

class Sneaker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sneaker: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/sneakers/${this.props.match.params.id}`)
      .then(res => this.setState({ sneaker: res.data.sneaker }))
      .catch(console.error)
  }

  destroy = () => {
    const { user } = this.props
    axios({
      url: `${apiUrl}/sneakers/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: { 'Authorization': `Token token=${user.token}` }
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { sneaker, deleted } = this.state

    if (!sneaker) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to='/show-sneakers' />
    }

    return (
      <Layout>
        <h4>{sneaker.brand}</h4>
        <p>{sneaker.style}</p>
        <p>{sneaker.color}</p>
        <button onClick={this.destroy}>Delete Sneaker</button>
        <Link to={`/sneakers/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/show-sneakers">
          <button>Back to all Sneakers</button>
        </Link>
      </Layout>
    )
  }
}

export default withRouter(Sneaker)
