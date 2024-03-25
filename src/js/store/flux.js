const getState = ({ getStore, getActions, setStore }) => {
	//Arquitectura que ayuda a cambiar los datos {store, actions}
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			info: "Info desde el store",
			pokemons: {} //Creamos datos y los podemos dejar inicializados
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPokemons: () => {
				fetch("")
				.then((response)=>(response.json))
				.then((data)=>{setStore({pokemons: data})})
				.catch((err))
			}
		}
	};
};

export default getState;
