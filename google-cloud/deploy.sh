kubectl apply -f ~/d3-deploy/ms_poducts/pvc_products.yaml
kubectl apply -f ~/d3-deploy/ms_poducts/db_products.yaml
kubectl apply -f ~/d3-deploy/ms_poducts/ms_products.yaml
kubectl apply -f ~/d3-deploy/ms_user/pvc_user.yaml
kubectl apply -f ~/d3-deploy/ms_user/db_ms_user.yaml


# Utils
kubectl exec -it ms-products-pod -- psql -U postgres