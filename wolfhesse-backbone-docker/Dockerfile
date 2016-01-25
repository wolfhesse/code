FROM wolfhesse/nodejs
MAINTAINER @wolfhesse "wolfgang.schuessel@gmail.com"

ENV DEBIAN_FRONTEND noninteractive

USER root
RUN apt-get update
RUN apt-get install -y telnet nmap screen tmux wget htop sudo
RUN useradd -ms /bin/bash rogera

RUN echo "net.ipc4.ip_forward=1" >> /etc/sysctl.conf

ADD ./src /home/rogera/app
RUN chown -R rogera:rogera /home/rogera
RUN rm -r /tmp/*

USER rogera
ENV HOME /home/rogera
WORKDIR /home/rogera/app

EXPOSE 2222
CMD ["node", "app"]
 
