import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Content, List, ListItem, Body, Thumbnail } from 'native-base';
import axios from 'axios';

const conteudo = [
  {id: 1, title: 'FUNDAMENTOS DE DERMATOSCOPIA', description: 'O livro contempla o que há de mais moderno nessa técnica de avaliação de imagem não invasiva, que propicia o exame de certas estruturas da pele...', image: 'https://d3vdsoeghm4gc3.cloudfront.net/Custom/Content/Products/61/75/617597_fundamentos-de-dermatoscopia-atlas-dermatologico-740315_m1_636102154901913324.jpg'},
   {id: 2, title: 'FUNDAMENTOS DE DERMATOSCOPIA', description: 'O livro contempla o que há de mais moderno nessa técnica de avaliação de imagem não invasiva, que propicia o exame de certas estruturas da pele...', image: 'https://d3vdsoeghm4gc3.cloudfront.net/Custom/Content/Products/61/75/617597_fundamentos-de-dermatoscopia-atlas-dermatologico-740315_m1_636102154901913324.jpg'},
];

export default class ListaLivros extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItens: [] };
  }

  componentWillMount() {
    const params = { 
      headers: {'X-API-KEY': 'LwPnk3KyHaCAKK5EEJftEfNLBxDa5Ns4aOhCoT1qSTGRslX0EvkML9CDpZV8gJeotpXxkdcAlDbhvdAB'} 
    };

    axios.get('http://api.192.168.22.10.xip.io/v1/artigos', params)
    .then(response => { 
      this.setState({ listaItens: response.data.data });
      console.log(this.state.listaItens);
    })
    .catch(error => { console.log(error); });
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
                <Text>{ item.titulo }</Text>
                <Text note>{ item.subtitulo }</Text>
              </Body>
            </ListItem>
          } />
        </Content>
      </Container>
    );
  }
}
