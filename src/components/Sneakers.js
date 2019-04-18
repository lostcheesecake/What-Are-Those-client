import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../apiConfig'
import Layout from './Layout'

class Sneakers extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sneakers: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/sneakers`)
      .then(res => this.setState({ sneakers: res.data.sneakers }))
      .catch(console.error)
  }

  render () {
    const sneakers = this.state.sneakers.map(sneaker => (
      <li key={sneaker.id}>
        <Link to={`/sneakers/${sneaker.id}`}>{sneaker.brand}</Link>
      </li>
    ))

    return (
      <Layout>
        <h4>Sneakers</h4>
        <ul>
          {sneakers}
        </ul>
      </Layout>
    )
  }
}

export default Sneakers
