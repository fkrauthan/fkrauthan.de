FROM registry.docker.cogindo.net/nginx:15.04
MAINTAINER Florian Krauthan


# Add project html pages
ADD build/ /srv/www/


# Export ports
EXPOSE 80


# Default command
CMD ["/usr/sbin/nginx"]
