cd /Users/tae/Desktop/brasaltae.github.io

git pull

git add .

echo 'Enter the commit message:'
read commitMessage

git commit -m "$commitMessage"

#echo 'Enter the name of the branch:'
#read branch
#git push origin $branch
#./push.sh

git push origin "main"

read