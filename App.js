/**
* Search Teste
*/

import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Content, List, ListItem, Body, Thumbnail } from 'native-base';

const conteudo = [
  {id: 1, title: 'FUNDAMENTOS DE DERMATOSCOPIA', description: 'O livro contempla o que há de mais moderno nessa técnica de avaliação de imagem não invasiva, que propicia o exame de certas estruturas da pele...', image: 'https://d3vdsoeghm4gc3.cloudfront.net/Custom/Content/Products/61/75/617597_fundamentos-de-dermatoscopia-atlas-dermatologico-740315_m1_636102154901913324.jpg'},
];

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { conteudo };
  }

  render() {
    return (
      <Container>
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
        dataArray={ this.state.conteudo } 
        renderRow={ item => 
          <ListItem>
            <Thumbnail square source={{ uri: item.image }} />
            <Body>
              <Text>{ item.title }</Text>
              <Text note>{ item.description }</Text>
            </Body>
          </ListItem>
        } />
        </Content>
      </Container>
    );
  }
}