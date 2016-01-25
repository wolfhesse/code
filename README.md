
#### building the docker image

```sh
git clone git@bitbucket.org:type1tv/type1tv-backbone.git

docker build -t type1tv/backbone ./type1tv-backbone-docker/
```

#### running the docker image

```sh
cd ops.t1.backbone.d
docker-compose up
```

----
