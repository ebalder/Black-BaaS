Black-BaaS
==========

Setup dev env (linux)

1. Build Dockerfile and run with
```
docker run -p 8529:8529 -v /home/elsa/BlackBaaS/data:/data -v /home/elsa/BlackBaaS/apps-dev:/apps-dev -v /home/elsa/BlackBaaS/logs:/logs -e development=1 --name=bb-arango-dev -d arangodb
```

## Curl tests

curl -X POST -d '{"name":"test"}' -H 'Content-Type:application/json' http://localhost:8529/