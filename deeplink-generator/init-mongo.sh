#!/bin/bash
set -e

# Wait for MongoDB to start
until mongosh --eval "print('Ready to connect')"; do
  echo "Waiting for MongoDB to be ready..."
  sleep 2
done

# Create user
mongosh ${DB_NAME} <<EOF
db.createUser({
  user: '${DB_USER}',
  pwd: '${DB_PASS}',
  roles: [{ role: 'readWrite', db: '${DB_NAME}' }]
})
EOF

# Initiate replica set
mongosh <<EOF
rs.initiate({
  _id: "rs0",
  members: [{ _id: 0, host: "mongodb:27017" }]
})
EOF