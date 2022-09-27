# Serverless Swapi Star Wars

A Lambda function for get data to https://swapi.py4e.com/ 

```
npm install
```

## Create table planet in mysql

```
CREATE TABLE `planet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `gravity` varchar(255) NOT NULL,
  `climate` varchar(255) DEFAULT NULL,
  `created` varchar(255) DEFAULT NULL,
  `diameter` varchar(255) DEFAULT NULL,
  `edited` varchar(255) DEFAULT NULL,
  `orbital_period` varchar(255) DEFAULT NULL,
  `population` varchar(255) DEFAULT NULL,
  `rotation_period` varchar(255) DEFAULT NULL,
  `surface_water` varchar(255) DEFAULT NULL,
  `terrain` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 
```

## Setup your credentials on serverless.yml

```
vpc: 
    securityGroupIds:
      -

    subnetIds:
      - 
      - 
```

## Deploy the code

serverless deploy



