BASEDIR=`pwd`

cd public/bwdata
BWDATADIR=`pwd`

echo $BASEDIR
echo $BWDATADIR

while read line
do
  cd "$BWDATADIR"
  if [ -d "$line" ]; then
    cd "$line"
    tree -H '.' -L 1 --noreport -I '.*' -I 'index.html' --dirsfirst -T 'Downloads' -D --charset utf-8 -o index.html
  fi
done < ../../dirtargets.txt

