rsync -r src/ docs/
rsync build/contracts/* docs/
git add .
git commit -m "Complies assets for Github Pages"
git push -u origin2 master