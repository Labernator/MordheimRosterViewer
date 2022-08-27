# Getting Started with Mordheim Roster Viewer

https://labernator.github.io/MordheimRosterViewer

## Development using Docker

If you want to work on the codebase, you can use the provided Dockerfile as a development environment. Build the image every time you make changes on the dependencies (package.json).

```
docker build -t MordheimRosterViewer:latest .
```

Spin up the image with the following command. This mounts the source folder as a volume. Node/React will hot-reload on changes.

```
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    MordheimRosterViewer:latest
```
