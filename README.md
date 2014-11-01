Black-BaaS
==========

Setup dev env (linux)

1. Build Dockerfile and run with
```
docker run -p 8529:8529 -v $pwd/data:/data -v $pwd/apps-dev:/apps-dev -v $pwd/logs:/logs -e development=1 -e verbose=1 --name=blackbaas-dev -a arangodb
```

## Curl tests

curl -X POST -d '{"name":"test"}' -H 'Content-Type:application/json' http://localhost:8529/