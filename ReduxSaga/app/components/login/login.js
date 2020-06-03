import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Button,
} from 'native-base';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/login.action';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        console.log('constructor')
    }

    submit = async () => {
        console.log('12341', 'submit')
        let data = {
            user: this.state.username,
            pass: this.state.password
        }
        await this.props.login(data)
        console.log(this.props.user)
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item>
                            <Input
                                placeholder="username"
                                onChangeText={text => this.setState({ username: text })}
                                value={this.state.username}
                            />
                        </Item>

                        <Item>
                            <Input
                                placeholder="password"
                                onChangeText={text => this.setState({ password: text })}
                                value={this.state.password}
                                secureTextEntry={true}
                            />
                        </Item>

                        <Button onPress={this.submit.bind(this)}>
                            <Text>Send</Text>
                        </Button>
                    </Form>

                    {/* <Text>{`${this.props.login.isLoading}` || 'Loading'}</Text>
                    <Text>{this.props.login.refreshToken || 'refreshToken'}</Text>
                    <Text>{this.props.login.accessToken || 'accessToken'}</Text> */}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.login.user,
        error: state.login.error
    };
};

export default connect(mapStateToProps, {login})(LoginScreen);