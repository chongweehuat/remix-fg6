#!/bin/bash

./update_start_script.sh draft

gcloud run deploy finexusgroup-sit \
  --source=. \
  --platform=managed \
  --region=us-central1 \
  --allow-unauthenticated