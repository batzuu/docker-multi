# Fibo calculator
A multi-container app with following services.
1. React frontend (client).
2. Server for handling api-calls from frontend.
3. Worker to calculate the Fibonacci number.
4. Nginx proxy server to route incoming request.
5. An instance of a redis server for recent calculated number and
6. An instance of a postgres server for seen indexes.

This project is to learn the CI-CD for multi-container/service applications.

To test install `docker` and `docker-compose`, and then in the main directory run:
```
docker-compose up
```