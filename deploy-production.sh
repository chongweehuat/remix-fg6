#!/bin/bash

./update_start_script.sh published

gcloud run deploy finexusgroup-production \
  --source=. \
  --platform=managed \
  --region=us-central1 \
  --allow-unauthenticated