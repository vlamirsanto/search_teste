/**
* Tela de Login
*/
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from "react-native";
import { Container, Content, Form, Item, Input, Label, Button, Text, Body } from 'native-base';
import { Actions } from "react-native-router-flux";

import styles from '../styles/Login';

export default class Cadastro extends Component {
  render() {
    return (
      <Container style={ styles.backgroundApp }>
      	<Content>
      		<Body style={ styles.bodyImageLogo }>
    				<Image 
              style={ styles.imageLogo }
    					source={ require('../images/logo.png') }
    				/>
    			</Body>
      		<Form>
      			<Item floatingLabel>
      				<Label>Login</Label>
      				<Input keyboardType="email-address" />
      			</Item>
      			<Item floatingLabel>
      				<Label>Senha</Label>
      				<Input secureTextEntry />
      			</Item>
      		</Form>
      		<View style={ styles.btnLogin }>
      			<Button onPress={ () => Actions.listaLivros1() } block success>
            	<Text>Cadastrar</Text>
          	</Button>
            <TouchableOpacity onPress={ () => Actions.pop() }>
              <Text style={ styles.btnCadastro }>Voltar para o login.</Text>
            </TouchableOpacity>
          </View>
      	</Content>
      </Container>
    );
  }
}
