

#INSTALAR

* Banco de Dados Postgres (ou configurar .env com dados do banco existente, e criar banco 'megahack_faznegocio')

```docker run --name postgres -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=megahack_faznegocio -p 5432:5432 -d postgres```

* Configurar .env
```
DB_CONNECTION=pg
DB_HOST=localhost
DB_PORT=5432
DB_USER=docker
DB_PASSWORD=docker
DB_DATABASE=megahack_faznegocio
```

# Iniciar server backend
```
cd faznegocio-backend
npm install
node server.js```



# Modulo utilizados
pg - 
