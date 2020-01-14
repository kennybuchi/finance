import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to='/' className='navbar-brand'>
                    Home
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to='/user/create' className='nav-link'>
                                Create User
                            </Link>
                        </Item>
                        <Item>
                            <Link to='/user/finances/list' className='nav-link'>
                                Finances
                            </Link>
                        </Item>
                        <Item>
                            <Link to='/user/finances/update' className='nav-link'>
                                Update
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>

        )
    }
}

export default Links