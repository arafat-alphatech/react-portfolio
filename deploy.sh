eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&

cd /home/ubuntu/react-portfolio &&
git pull && 
npm install &&
npm run build