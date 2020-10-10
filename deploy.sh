rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin origin git@github.com:sulimi/sumi-ui.git &&
git push -u origin master &&
cd ..
echo https://sulimi.github.io/sumi-ui/index.html