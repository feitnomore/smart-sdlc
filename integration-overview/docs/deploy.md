# Deploy

## Cloud Run
Para provisionar a aplicação no Cloud Run manualmente:
```bash
export PROJECT_ID="gcp-project-id"
export REPOSITORY_LOCATION="artifact registry repository location"
export REPOSITORY_ID="artifact registry repository id"
export CLOUDRUN_LOCATION="southamerica-east1"
export TAG="1.0.0"
gcloud run deploy integration-overview --image ${REPOSITORY_LOCATION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY_ID}/integration-overview/integration-overview:${TAG} --region ${CLOUDRUN_LOCATION} --project ${PROJECT_ID} --allow-unauthenticated

```

## Executando Localmente
Para executar a aplicação localmente:

```bash
export PORT=8080
export APIKEY="random generated api key"
export PROJECT_ID="gcp-project-id"
export USER_AGENT="string to look for in user agent header"

npm start
```