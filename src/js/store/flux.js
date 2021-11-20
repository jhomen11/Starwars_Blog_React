const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			detallePersonaje: {}
		},
		actions: {
			// Use getActions to call a function within a fuction

			obtenerApi: async () => {
				await fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => setStore({ personajes: data.results }))
					.catch(error => console.log("error", error));
			},
			verDetalle: async id => {
				const store = getStore();
				await fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => {
						setStore({ detallePersonaje: data.result.properties });
						console.log(store);
					})
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
