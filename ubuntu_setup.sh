sudo apt update
sudo apt install postgresql postgresql-contrib
sudo service postgresql start  
sudo -u postgres createuser --interactive
sudo -i -u postgres createdb pitt-social
psql -d pitt-social -f data-source/schema.sql
psql -d pitt-social -f data-source/test.sql
psql -d pitt-social -f data-source/trigger.sql
pg_lsclusters #check out the port of the database


