docker cp backup.sh mongo-primary:/home

docker exec mongo-primary home/backup.sh

docker cp mongo-primary:/home/dump/ dump

Read-Host -Prompt "Press Enter to exit"
