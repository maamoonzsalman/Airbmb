
echo "Building the project..."
npm run build

echo "Syncing to S3 bucket..."
aws s3 sync build/ s3://airbmbucket --delete

echo "Sync complete!"
