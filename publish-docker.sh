docker login

docker build -t ms_reviews_server ms-reviews/

docker tag ms_reviews_server isabela22/ms_reviews_server

docker tag push isabela22/ms_reviews_server

docker build -t ms_reviews_db ms-reviews/db/

docker tag  ms_reviews_db isabela22/ms_reviews_db

docker tag push isabela22/ms_reviews_db