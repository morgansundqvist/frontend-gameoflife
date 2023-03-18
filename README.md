# frontend-gameoflife

Small and dirty implementation of Game Of Life client for use with [Morgans Game of Life REST API](https://github.com/morgansundqvist/service-gameoflife)

# Introduction

A really simple and quickly implemented client for Game of life rest api built by Morgan

# Prerequisits

1. NPM 9+
2. NODE 16+
3. Docker
4. Docker Compose plugin

# Setup and installation

## Clone the project

Clone this project either through ssh or https

## Build the project

## Docker

Edit the .env file and point it to the REST api with variable REACT_APP_API_BASE_URL

Install docker compose and use below command to start service

```
docker compose up
```

## Running

Edit the .env file and point it to the REST api with variable REACT_APP_API_BASE_URL

You can then start the application with

```
npm run start
```
