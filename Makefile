run: install
	docker-compose ps -a

install: down
	docker-compose up -d --build

down:
	docker-compose down
	make status

status:
	docker-compose ps -a