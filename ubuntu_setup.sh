sudo apt update
sudo apt install postgresql postgresql-contrib
sudo service postgresql start  
sudo -u postgres createuser --interactive
sudo -i -u postgres createdb pitt-social
psql -d pitt-social -f data-source/schema.sql


