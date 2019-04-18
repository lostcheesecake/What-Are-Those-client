import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../apiConfig'
import SneakerForm from './SneakerForm'
import Layout from './Layout'

class SneakerEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sneaker: {
        brand: '',
        style: '',
        color: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/sneakers/${this.props.match.params.id}`)
      .then(res => this.setState({ sneaker: res.data.sneaker }))
      .catch(console.error)
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedSneaker = Object.assign(this.state.sneaker, updatedField)

    this.setState({ sneaker: editedSneaker })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/sneakers/${this.props.match.params.id}`,
      method: 'PATCH',
      data: { sneaker: this.state.sneaker },
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { sneaker, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to="/show-sneakers" />
    }

    return (
      <Layout>
        <SneakerForm
          sneaker={sneaker}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Layout>
    )
  }
}

export default withRouter(SneakerEdit)
