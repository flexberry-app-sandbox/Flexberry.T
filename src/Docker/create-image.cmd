docker build --no-cache -f SQL\Dockerfile.PostgreSql -t t/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t t/app ../..
