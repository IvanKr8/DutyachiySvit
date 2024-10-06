FROM ubuntu:latest
LABEL authors="vania"

ENTRYPOINT ["top", "-b"]