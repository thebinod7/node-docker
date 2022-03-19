===Container (Image in runtime)===

- Quick start
- Isolated env for running apps
- Lightweight
- Operate on single host OS i.e Share OS

====Virtual Machines====

- Slow to start
- Run on top of OS using hypervisors like VMWare i.e. has unique OS
- Heavyweigth
- Opearates on defferent OS for each isolated env
- Eg: 8GB ram for 2 apps => 4GB + 4 GB

========Dockerfile============

- Instructions for packaging apps
-

=========IMAGE (Packaged snapshot of an app)=========

- OS
- Runtine env EG: Node
- Application files
- 3rd party libs
- Env variables

==========CREATE IMAGE=========

- BUILD => docker build -t node-docker .(DOCKERFILE_DIR)
- LIST_DOCKER_IMAGES => docker image ls
- RUN_DOCKER_IMAGE => docker run node-docker (TAG_NAME)
- RUN_DOCKER_IMAGE_INTERACTIVE=> docker run -it node-docker (TAG_NAME)
- PULL_IMAGE => docker pull IMAGE_NAME
- LIST_RUNNING_CONTAINERS => docker ps OR docker ps -a
