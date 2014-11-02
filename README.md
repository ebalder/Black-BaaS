Black-BaaS
==========

Setup dev env (linux)

## Prerequisites:
- nodejs
- npm
- docker
- nginx

1. Build Dockerfile and start container:
```
docker build -t docker/database/arangodb
docker run -p 8529:8529 -v $pwd/data:/data -v $pwd/apps-dev:/apps-dev -v $pwd/logs:/logs -e development=1 -e verbose=1 --name=blackbaas-dev arangodb
```

2. Install Bower:
```
sudo npm install -g bower
```

3. Install dependencies:
```
./bootstrap.sh
```

## Curl tests

curl -X POST -d '{"name":"test"}' -H 'Content-Type:application/json' http://localhost:8529/