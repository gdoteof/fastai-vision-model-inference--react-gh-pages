GITDESC=$(git log | head -n 5 | tail -n 1)
GITHASH=$(git log | head -n 1 | awk '{print $2}')

echo $GITHASH
echo $GITDESC


sed -i "s/ZZGITDESCZZ/$GITDESC/" src/App.js 
sed -i "s/ZZGITHASHZZ/$GITHASH/" src/App.js 
