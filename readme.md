## installation instruction
1. nodejs and npm
    - `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\`
    - `sudo apt-get install -y nodejs`
    - `sudo apt install npm`
2. mongodb
    - `curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor`
   - `echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list`
   - `sudo apt-get update`
   - `sudo apt-get install -y mongodb-org`
   - The official MongoDB package includes a configuration file (/etc/mongod.conf).
   - `sudo systemctl start mongod`
   - `sudo systemctl status mongod`
   - `sudo systemctl enable mongod` => will start on reboot

## Management
### Node App
- `npm start` to start the server 
### MongoDB
- Start a `mongosh` session on the same host machine as the mongod. You can run `mongosh` without any command-line options to connect to a mongod that is running on your localhost with default port 27017.
- The MongoDB Shell, mongosh, is a fully functional JavaScript and Node.js 16.x REPL environment for interacting with MongoDB deployments. You can use the MongoDB Shell to test queries and operations directly with your database.
- Mongosh commands:
    - `db`: prints actual db
    - `use <dbname>`: creates or switches to existing db
    - `show dbs`: list all databases
    - `db.myCollectionName.insertOne({x: 1});`: insert one record + create collection if doesn't exist
    - `db.myCollectionName.find()`: list all elements in a collection
    - `db.mycollectionName.find({"x": "1"})`: specific lookup