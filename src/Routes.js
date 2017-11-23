/**
* Arquivo de Rotas
*/
import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import Login from "./components/Login";
import ListaLivros from "./components/ListaLivros";

export default props => (
	<Router>
		<Stack key="root">
			<Scene key="listaLivros" component={ ListaLivros } hideNavBar />
			<Scene key="formLogin" component={ Login } hideNavBar/>
		</Stack>
	</Router>
);
