run: install
	docker-compose exec api php artisan optimize:clear
	docker-compose exec api php artisan migrate
	docker-compose ps -a

install: down
	ls .data || mkdir .data
	ls ./api/.env || cp ./api/.env.example ./api/.env
	USER=$(USER) docker-compose up -d --build
	docker-compose exec api composer install
	docker-compose exec api php artisan key:generate

down:
	docker-compose down
	make status

status:
	docker-compose ps -a