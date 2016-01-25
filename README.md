
### purpose

#### business

backbone implementiert das HELO protokoll mit einem verb: 'helo'

jedes 'helo' paket wird als 'data' an alle verbundenen clients geschickt.

#### ops

- verb 'tick'
	-  z zt: 2 sek
- verb 'event'
	- verwaltungsinfo

### build and run

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
