import React, { Component } from 'react';
import { Text, Footer } from 'native-base';

import styles from '../styles/Footer';

export default props => (
	<Footer style={ styles.backgroundApp }>
		<Text style={ styles.txtFooter }>2017 - Todos os direitos reservados</Text>
	</Footer>
);
