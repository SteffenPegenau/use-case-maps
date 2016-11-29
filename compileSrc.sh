#!/bin/bash
FILES=src/*.tex
for f in $FILES
do
  pdflatex -interaction=nonstopmode -output-directory=pdf/ $f
done
