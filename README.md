Steps:

1. `npm run build` (build the docker image)
2. `npm run start` (start a hot reloading server)
3. Enter arbitrary code to be executed inside a docker container, via `localhost:3000?code="INSERT_CODE_HERE"`.  Docker process shuts down when command is complete.

Ex. `localhost:3000?code="50*50*50"`
