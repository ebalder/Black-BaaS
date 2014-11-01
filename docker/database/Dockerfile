FROM ubuntu:14.04
MAINTAINER Frank Celler <info@arangodb.org>

# for local installation, uncomment
#ADD ./arangodb_2.2.6_amd64.deb /install/arangodb_2.2.6_amd64.deb
#ADD ./libicu52_52.1-3_amd64.deb /install/libicu52_52.1-3_amd64.deb
#ADD ./Release.key /install/Release.key

# add scripts to install and run ArangoDB
ADD ./scripts /scripts

# install ubuntu package
RUN ./scripts/install.sh

# expose data, apps and logs
VOLUME ["/data", "/apps", "/apps-dev", "/logs"]

# standard port
EXPOSE 8529

# start script
CMD ["/scripts/start.sh"]
