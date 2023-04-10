docker cp backup.sh mongodb:/home

docker exec mongodb home/backup.sh

docker cp mongodb:/home/dump/ dump

Read-Host -Prompt "Press Enter to exit"
