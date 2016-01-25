
### purpose

#### business

backbone implementiert das HELO protokoll mit einem verb: 'helo'

jedes 'helo' paket wird als 'data' an alle verbundenen clients geschickt.

#### ops

- verb 'tick'
	-  z zt: 2 sek
- verb 'event'
	- verwaltungsinfo

#### samples

fuer die entwicklung: ein metaloi-backbone, ein hck-socket-d 'server/engine'
https://gist.github.com/wolfhesse/45a6ed3723c6d4a86837

wobei: loi steht fuer 'level of indirection'

in ./src/. c_env ist ein listener client
in ./src/. c_stream ist ein stdout 2 backbone 'tee'; data_verb = 'chunk'

..und ein paar konventionen fuer den anfang:

- um business protokolle festzulegen:
	- application
	- verb

- um routing oder filter zu ermoeglichen: 
	- cyberport


-
### build and run

#### building the docker image

trick: grep build RE tab

```sh
git clone git@bitbucket.org:type1tv/type1tv-backbone.git

docker build -t type1tv/backbone ./

alt and publish:
docker build -t wolfhesse/backbone ./

```

#### running the docker image

```sh
cd ops.t1.backbone.d
docker-compose up
```

---

### system setup

#### granularity:
	- system
	- cluster = a couple of systems
	- pool = a couple of clusters or systems

#### convention
exposed port in production is 3222 for system-backbone
exposed port in production is 3223 for cluster-backbone

exposed port in development is 2222 for system-backbone
exposed port in development is 2223 fro cluster-backbone (nginx reverse translation)


