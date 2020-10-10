rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin origin git@github.com:sulimi/sumi-ui.git &&
git push -u origin main &&
cd ..
echo https://sulimi.github.io/sumi-ui/index.html