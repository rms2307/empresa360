export default{
    data: () => ({
        dados: {},
      }),
      methods: {
        obterDados(url) {
          fetch(url)
            .then((resp) => resp.json())
            .then((resp) => {
              this.dados = resp;
            });
        },
      },
}