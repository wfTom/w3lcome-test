import * as endpointsFiles from '../tasks/routes/task.routers'

export default {
  openapi: '3.0.0',
  info: {
    title: 'W3LCOME API',
    description: 'Api para o teste de desenvolvedor pleno na w3lcome',
    contact: {
      name: 'Tom',
      linkedin: 'https://www.linkedin.com/in/wellington-barros-593ba0137/',
      github: 'https://github.com/wfTom',
      email: 'wf_tom@hotmail.com.br',
    },
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:1333',
      description: 'API do teste na w3lcome',
    },
  ],
  paths: { endpointsFiles },
  components: {
    schemas: {},
  },
}
