#!/bin/bash
FILES=pdf/*.pdf
for f in $FILES
do
  convert -density 300 $f -quality 90 $f.png
  mv $f.png png/
done
