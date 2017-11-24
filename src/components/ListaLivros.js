import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, List, ListItem, Body, Thumbnail } from 'native-base';
import axios from 'axios';
import { apiKeys, urlApi } from '../configs';

export default class ListaLivros extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItens: [] };
  }

  componentWillMount() {
    const params = { 
      headers: apiKeys
    };

    axios.get(urlApi + 'editoras', params)
    .then(response => { 
      this.setState({ listaItens: response.data.data });
      console.log(this.state.listaItens);
    })
    .catch(error => {
      alert('Houve um erro ao consultar os dados.');
      console.log(error);
    });
  }

  render() {
    return (
    	<Container style={{ backgroundColor: '#fff'}}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Busca</Text>
          </Button>
        </Header>
        <Content>
          <List 
            dataArray={ this.state.listaItens } 
            renderRow={ item => 
            <ListItem>
              <Body>
                <Text>{ item.razao_social }</Text>
                <Text note>{ item.subtitulo }</Text>
              </Body>
            </ListItem>
          } />
        </Content>
      </Container>
    );
  }
}
