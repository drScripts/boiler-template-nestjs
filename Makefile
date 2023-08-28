start-dev:
	docker compose -f docker-compose.dev.yaml --env-file config/.env.depedencies up -d
startBuild-dev:
	$(MAKE) build-service-dev
	docker compose -f docker-compose.dev.yaml --env-file config/.env.depedencies up -d
stop-dev:
	docker compose -f docker-compose.dev.yaml --env-file config/.env.depedencies stop
clean-dev:
	docker compose -f docker-compose.dev.yaml --env-file config/.env.depedencies down
build-service-dev:
	docker build -f Dockerfile.dev -t takeme-dev-v2 .

start:
	docker compose --env-file config/.env.depedencies up -d
startBuild:
	$(MAKE) build-service
	docker compose -f docker-compose.dev.yaml --env-file config/.env.depedencies up -d
stop:
	docker compose --env-file config/.env.depedencies stop
clean:
	docker compose --env-file config/.env.depedencies down
build-service:
	docker build -t takeme-v2 . 
	
restart-service:
	docker restart takeme