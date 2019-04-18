import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../apiConfig'
import SneakerForm from './SneakerForm'
import Layout from './Layout'

class SneakerCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sneaker: {
        brand: '',
        style: '',
        color: ''
      },
      createdSneakerId: null
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedSneaker = Object.assign(this.state.sneaker, updatedField)

    this.setState({ sneaker: editedSneaker })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { sneaker } = this.state
    const token = this.props.user.token

    axios({
      url: `${apiUrl}/sneakers`,
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + (token)
      },
      data: { sneaker }
    })
      .then(responseData => { console.log(responseData); return responseData })
      .then(res => this.setState({ createdSneakerId: res.data.sneaker.id }))
      .catch(console.error)
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { createdSneakerId, sneaker } = this.state

    if (createdSneakerId) {
      return <Redirect to={`/sneakers/${createdSneakerId}`} />
    }

    return (
      <Layout>
        <SneakerForm
          sneaker={sneaker}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
      </Layout>
    )
  }
}

export default SneakerCreate
