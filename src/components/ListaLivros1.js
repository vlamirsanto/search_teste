import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Item, Input, Content, Card, CardItem, Thumbnail, Body, Text, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from '../styles/ListaLivros1';

const conteudo = [
  {id: 1, title: 'Fundamentos de Dermatoscopia', editora: 'Atheneu', date: '2017', description: 'O livro contempla o que há de mais moderno nessa técnica de avaliação de imagem não invasiva, que propicia o exame de certas estruturas da pele que não podem ser visualizadas a olho nu. Fundamentos de Dermatoscopia é um livro diferente do modelo habitual encontrado, em geral, na Medicina, porque conta com textos bastante sucintos, muitos desenhos esquemáticos e um grande número de fotografias, incluindo a correlação clinico-histológica, sempre que necessário e relevante.', image: 'http://lectio.com.br/upload/1/atheneu/capas/2682.jpg'},
   {id: 2, title: 'Manual de condutas em clínica médica baseadas em evidências', editora: 'Atheneu', date: '2017', description: 'Manual de Condutas em Clínica Médica Baseadas em Evidências tem como proposta ser guia de normatização, verdadeiro protocolo das principais condutas na prática do dia a dia de Clínica Médica. É, pois, livro eminentemente objetivo, rico em algoritmos, tabelas e organogramas. Tudo com base nas melhores e mais atualizadas evidências médicas. Seu público-leitor está constituído por Clínicos, Médicos de Família, Residentes em Clínica Médica, Estudantes do Internato e da Graduação em Medicina. Manual de Condutas em Clínica Médica Baseadas em Evidências apresenta 2 Editoras, 103 Colaboradores, 11 Seções, 55 Capítulos, num total de 342 Páginas.', image: 'http://lectio.com.br/upload/1/atheneu/capas/2731.jpg'},
   {id: 3, title: 'Emergências Médicas', editora: 'Atheneu', date: '2017', description: 'Emergências Médicas é livro que se propõe a responder aos grandes desafios do atendimento em urgência e emergência que, por sinal, envolvem a união dos conhecimentos fundamentados nas melhores evidências médicas, de modo prático e objetivo, tão importantes à beira do leito. Ressalta ainda a vencer esses desafios a capacitação de profissional dotado de profundo raciocínio clínico, amparando-se por protocolos, procedimentos e condutas de alta eficiência. Como é de conhecimento geral, há a considerar o grande contingente de profissionais atuando na área da urgência e emergência sob condições ambulatoriais e hospitalares muitas vezes carentes de instrumental apropriado para a sua atividade. Sabedora da grande complexidade para o atendimento correto, a Escola Paulista de Medicina da Universidade Federal de São Paulo - EPM/UNIFESP reuniu equipe de professores e residentes para produzir o presente trabalho, contemplando, assim, de acordo com as melhores evidências médicas, as necessidades apontadas. A partir, pois, da análise como um todo dessas condições profissionais e médico-sociais, equipe de professores e residentes da EPM / UNIFESP decidiu produzir o presente trabalho. É livro atual, oportuno e para o momento, pois. Emergências Médicas apresenta 4 Editores, 4 Editores Associados, 152 Colaboradores responsáveis por 15 Seções e 118 Capítulos, dos quais muitos dedicam-se criativamente às especialidades cirúrgica, oftalmológica, otorrinolaringológica, ginecológica e obstétrica. O livro soma 1.103 páginas, o que o torna verdadeiro modelo à semelhança dos principais títulos internacionais no tema. Seu público leitor é formado por emergencistas, socorristas, clínicos, médicos de família, residentes em Clínica Médica e Emergência Médica.', image: 'http://lectio.com.br/upload/1/atheneu/capas/2744.jpg'},
   {id: 4, title: 'Tratado de Neurologia Infantil', editora: 'Atheneu', date: '2017', description: 'Tratado de Neurologia Infantil tem sua base acadêmica no Setor de Neurologia Infantil da Escola Paulista de Medicina da Universidade Federal de São Paulo - EPM/Unifesp. Como se sabe, as doenças do sistema nervoso na crianças e nos adolescentes têm um grande impacto para as suas vidas e as de seus familiares, constituindo, sem sombra de dúvida, grupo de maior gravidade no universo das doenças pediátricas. O livro tem como proposta promover o correto diagnóstico e o tratamento adequado segundo os melhores padrões da medicina baseada em evidências, as pesquisas clínicas contemporâneas e a própria experiência clínica, ambulatorial e hospitalar dos autores nessa subespecialidade pediátrica. Apresenta três grandes seções: 1 - O estudo e o desenvolvimento da propedêutica neurológica. 2 - Aborda as principais manifestações das doenças neurológicas. Enfatiza a análise dos sinais e sintomas, bem como do diagnóstico e diagnóstico diferencial. 3 - Trata das principais doenças neurológicas e síndromes que incidem na faixa etária pediátrica Tratado de Neurologia Infantil apresenta 2 Editores, 59 Colaboradores, 3 seções, 28 capítulos, num total de 1.264 páginas. O livro tem como público-leitor Pediatras Gerais, Neurologistas Pediátricos, Neurologistas e Residentes em Pediatria e Neurologia Pediátrica.', image: 'http://lectio.com.br/upload/1/atheneu/capas/2754.jpg'},
];

export default class ListaLivros1 extends Component {

  constructor(props) {
    super(props);

    this.state = { conteudo };
  }

  _prepareDescription( texto )
  {
    return texto.slice(0, 80) + '...';
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
          <Grid>
            <Col>
              { this.state.conteudo.map((item,key) => {
                if( key % 2 == 0 ){
                return (
                  <Card key={ key } style={{ flex: 1 }}>
                    <CardItem>
                      <Body style={ styles.bodyInfos }>
                        <Body style={ styles.bodyImage }>
                          <Image source={{uri: item.image}} style={ styles.imageItem } />
                        </Body>
                        <Text>{ item.title }</Text>
                        <Text note>{ item.editora }</Text>
                        <Text note>{ item.date }</Text>
                        <Body style={ styles.bodyDescription }>
                          <Text note>{ this._prepareDescription(item.description) }</Text>
                        </Body>
                      </Body>
                    </CardItem>
                  </Card>
                );}
              })}
            </Col>
            <Col>
              { this.state.conteudo.map((item,key) => {
                if( key % 2 != 0 ){
                return (
                  <Card key={ key } style={{ flex: 1 }}>
                    <CardItem>
                      <Body style={ styles.bodyInfos }>
                        <Body style={ styles.bodyImage }>
                          <Image source={{uri: item.image}} style={ styles.imageItem } />
                        </Body>
                        <Text>{ item.title }</Text>
                        <Text note>{ item.editora }</Text>
                        <Text note>{ item.date }</Text>
                        <Body style={ styles.bodyDescription }>
                          <Text note>{ this._prepareDescription(item.description) }</Text>
                        </Body>
                      </Body>
                    </CardItem>
                  </Card>
                );}
              })}
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}