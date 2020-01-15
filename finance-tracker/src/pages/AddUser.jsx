import React, { Component } from 'react'
import api from '../api'
import styled from'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
})`
    margin: 0 30px
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
    margin: 15px 15px 15px 5px;
`

const initState = {
    name: '',
    totalFunds: 0,
    allocatedFunds: {},
    purchases: {},
}
class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = initState
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleAddUser = async() => {
        const { name } = this.state
        const payload = { name,  }
        await api.addUser(payload).then(res => {
            this.setState(initState)
        })
    }

    render() {
        const { name } = this.state
        return (
            <div>
                <Wrapper>
                    <Title>Create User</Title>
                    <Label>Username</Label>
                    <InputText type="text" value={name} onChange={this.handleChangeInputName}/>

                    <Button onClick={this.handleAddUser}>Add User</Button>
                    <CancelButton href={'/'}>Cancel</CancelButton>
                </Wrapper>

            </div>
        )
    }
}

export default AddUser