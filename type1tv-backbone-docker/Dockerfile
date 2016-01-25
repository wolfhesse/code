FROM dockerfile/nodejs
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

EXPOSE 2222
CMD ["node", "app"]
 
