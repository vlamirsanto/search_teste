/**
* Tela de Login
*/
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from "react-native";
import { Container, Content, Form, Item, Input, Label, Button, Text, Body, Footer } from 'native-base';
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
      			<Button onPress={ () => Actions.listaLivros() } block success>
            	<Text>Login</Text>
          	</Button>
            <TouchableOpacity onPress={ () => Actions.formLogin() }>
              <Text style={ styles.btnCadastro }>Voltar para o login.</Text>
            </TouchableOpacity>
          </View>
      	</Content>
      	<Footer style={ styles.backgroundApp }>
        	<Text style={ styles.txtFooter }>2017 - Todos os direitos reservados</Text>
        </Footer>
      </Container>
    );
  }
}

