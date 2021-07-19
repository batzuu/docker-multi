# Fibo calculator
A multi-container app with following services.
1. React frontend (client).
2. Server for handling api-calls from frontend.
3. Worker to calculate the Fibonacci number.
4. Nginx proxy server to route incoming request.
5. An instance of a redis server for recent calculated number and
5. An instance of a postgress server for seen indexes.

This project is to learn the CI-CD for multi-container/service applications.