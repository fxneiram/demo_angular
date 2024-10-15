run-prod:
	@echo "Running production server..."
	@ng serve --configuration=production --port 4200

run-dev:
	@echo "Running development server..."
	@ng serve --port 4200

run-docker:
	@echo "Running server..."
	@docker-compose down
	@docker-compose up --build
