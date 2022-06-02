# Paymet Gateway

*Version 1.0.0*

---
##  Running Locally
# clone wiht https
git remote add origin https://github.com/ZiaAfridi/payment-gateway.git

cd backend
# install node modules.
npm i
# start app.
npm run dev
----

## NOTE
## DB 
Before starting app create db.
run the following query in psql.
create database payment_gateway;

```
##  Folder structure

```
.
├── src                    		# Folder storing all source code including database models, controllers and routes

	├── database          		# Database configuration / models / connection's settings
    ├── middleware              # Middleware reused inside routes.
	├── routes       			# App routes.
    ├── controller     			# Routes controllers
    ├── utils          			# Utility reused inside controllers
	├── api.js          		# Run file of project

├── .env                        # environnement variables of the app.
├── .gitignore                  # Ignored files for pushing to repository
├── .env-exemple                # Exemple environnement file (to be renamed .env for run project)
├── package.json                # Package's configuration / dependencies
├── swagger.js                  # Visual representation on request body.
└── README.md

```


## Encryption
For encrytion use the crpto-js module and alogrithm is AES. 
Because AES encryption is faster so it is ideal for applications, firmware and hardware that require low latency or high throughput.
AES lies in its key length options so the time required to crack an encryption algorithm is directly related to the length of the key used to secure. So AES is exponentially stronger

## Luhn Alogrithm
Luhn alogrithm use for the credit card validation.
I use the luhn on the route level because if user bypas the form level validation or front end validation or in case of disable js on his browser or do something else so I decide to apply luhn alogrithm on backend side once credit card number verify then pass the request to the next handler.

