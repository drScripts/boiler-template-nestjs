start-dev:
	docker compose -f docker-compose.dev.yaml --env-file ./.env.dev up -d
startBuild-dev:
	$(MAKE) build-service-dev
	docker compose -f docker-compose.dev.yaml --env-file ./.env.dev up -d
stop-dev:
	docker compose -f docker-compose.dev.yaml --env-file ./.env.dev stop
clean-dev:
	docker compose -f docker-compose.dev.yaml --env-file ./.env.dev down
build-service-dev:
	docker build -f Dockerfile.dev -t takeme-dev-v2 .

start:
	$(MAKE) build-service
	docker compose --env-file ./.env up -d
stop:
	docker compose --env-file ./.env stop
clean:
	docker compose --env-file ./.env down
build-service:
	docker build -t takeme-v2 . 
	
restart-service:
	docker restart takeme