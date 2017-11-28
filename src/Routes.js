/**
* Arquivo de Rotas
*/
import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import ListaLivros from "./components/ListaLivros";
import ListaLivros1 from "./components/ListaLivros1";

export default props => (
	<Router>
		<Stack key="root">
			<Scene key="formLogin" component={ Login } hideNavBar/>
			<Scene key="listaLivros" component={ ListaLivros } hideNavBar />
			<Scene key="listaLivros1" component={ ListaLivros1 } hideNavBar />
			<Scene key="cadastro" component={ Cadastro } hideNavBar />
		</Stack>
	</Router>
);
