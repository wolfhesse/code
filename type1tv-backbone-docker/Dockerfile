# https://github.com/dockerfile/nodejs/issues/11
FROM node:0.12

MAINTAINER @wolfhesse "wolfgang.schuessel@gmail.com"

ENV DEBIAN_FRONTEND noninteractive

USER root
#RUN apt-get update
RUN useradd -ms /bin/bash type1tv

RUN echo "net.ipc4.ip_forward=1" >> /etc/sysctl.conf

ADD ./src /home/type1tv/app
RUN chown -R type1tv:type1tv /home/type1tv
RUN rm -r /tmp/*

USER type1tv
ENV HOME /home/type1tv
WORKDIR /home/type1tv/app

# TODO env to expose https://github.com/docker/docker/issues/7421
ENV T1_BACKBONE_PORT 2222
EXPOSE 2222

CMD ["node", "app"]
 
