#!/bin/bash

./update_start_script.sh draft

gcloud run deploy finexusgroup-pre \
  --source=. \
  --platform=managed \
  --region=us-central1 \
  --allow-unauthenticated